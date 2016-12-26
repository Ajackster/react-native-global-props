import { ActivityIndicator } from 'react-native';

export const setCustomActivityIndicator = customProps => {
  const activityIndicatorRender = ActivityIndicator.prototype.render;
  ActivityIndicator.prototype.render = function render() {
    let oldProps = this.props;
    this.props = { ...customProps, ...this.props };
    try {
      return activityIndicatorRender.apply(this, arguments);
    } finally {
      this.props = oldProps;
    }
  };
};
