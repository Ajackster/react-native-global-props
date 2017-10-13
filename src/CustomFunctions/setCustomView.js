import {
  View
} from 'react-native';

export const setCustomView = customProps => {
  const ViewRender = View.prototype.render;
  const initialDefaultProps = View.prototype.constructor.defaultProps;
  View.prototype.constructor.defaultProps = {
    ...initialDefaultProps,
    ...customProps,
  }
  View.prototype.render = function render() {
    let oldProps = this.props;
    this.props = { ...this.props, style: [customProps.style, this.props.style] };
    try {
      return ViewRender.apply(this, arguments);
    } finally {
      this.props = oldProps;
    }
  };
};
