import {
  View
} from 'react-native';

export const setCustomView = customProps => {
  const viewRender = View.prototype.render;
  View.prototype.render = function render() {
    const oldProps = this.props;
    this.props = { ...customProps, ...this.props, style: [customProps.style, this.props.style] };
    try {
      return viewRender.apply(this, arguments);
    } finally {
      this.props = oldProps;
    }
  };
};
