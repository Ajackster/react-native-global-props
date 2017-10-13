import { ActivityIndicator } from 'react-native';

export const setCustomActivityIndicator = customProps => {
  const ActivityIndicatorRender = ActivityIndicator.prototype.render;
  const initialDefaultProps = ActivityIndicator.prototype.constructor.defaultProps;
  ActivityIndicator.prototype.constructor.defaultProps = {
    ...initialDefaultProps,
    ...customProps,
  }
  ActivityIndicator.prototype.render = function render() {
    let oldProps = this.props;
    this.props = { ...this.props, style: [customProps.style, this.props.style] };
    try {
      return ActivityIndicatorRender.apply(this, arguments);
    } finally {
      this.props = oldProps;
    }
  };
};
