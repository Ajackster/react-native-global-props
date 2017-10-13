import {
  RefreshControl
} from 'react-native';

export const setCustomRefreshControl = customProps => {
  const RefreshControlRender = RefreshControl.prototype.render;
  const initialDefaultProps = RefreshControl.prototype.constructor.defaultProps;
  RefreshControl.prototype.constructor.defaultProps = {
    ...initialDefaultProps,
    ...customProps,
  }
  RefreshControl.prototype.render = function render() {
    let oldProps = this.props;
    this.props = { ...this.props, style: [customProps.style, this.props.style] };
    try {
      return RefreshControlRender.apply(this, arguments);
    } finally {
      this.props = oldProps;
    }
  };
};
