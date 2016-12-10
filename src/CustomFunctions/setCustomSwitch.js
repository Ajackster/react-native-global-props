import {
  Switch
} from 'react-native';

export const setCustomSwitch = customProps => {
  const switchRender = Switch.prototype.render;
  Switch.prototype.render = function render() {
    let oldProps = this.props;
    this.props = { ...customProps, ...this.props };
    try {
      return switchRender.apply(this, arguments);
    } finally {
      this.props = oldProps;
    }
  };
};
