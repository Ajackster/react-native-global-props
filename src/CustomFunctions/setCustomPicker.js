import {
  Picker
} from 'react-native';

export const setCustomPicker = customProps => {
  const pickerRender = Picker.prototype.render;
  Picker.prototype.render = function render() {
    let oldProps = this.props;
    this.props = { ...customProps, ...this.props };
    try {
      return pickerRender.apply(this, arguments);
    } finally {
      this.props = oldProps;
    }
  };
};
