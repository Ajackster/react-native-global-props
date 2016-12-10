import {
  StatusBar
} from 'react-native';

export const setCustomStatusBar = customProps => {
  const statusBarRender = StatusBar.prototype.render;
  StatusBar.prototype.render = function render() {
    let oldProps = this.props;
    this.props = { ...customProps, ...this.props };
    try {
      return statusBarRender.apply(this, arguments);
    } finally {
      this.props = oldProps;
    }
  };
};
