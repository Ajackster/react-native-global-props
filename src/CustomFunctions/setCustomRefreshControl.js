import {
  RefreshControl
} from 'react-native';

export const setCustomRefreshControl = customProps => {
  const refreshControlRender = RefreshControl.prototype.render;
  RefreshControl.prototype.render = function render() {
    let oldProps = this.props;
    this.props = { ...customProps, ...this.props, style: [customProps.style, this.props.style] };
    try {
      return refreshControlRender.apply(this, arguments);
    } finally {
      this.props = oldProps;
    }
  };
};
