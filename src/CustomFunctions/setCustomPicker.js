import {
  Picker
} from 'react-native';

export const setCustomPicker = customProps => {
  const PickerRender = Picker.prototype.render;
  const initialDefaultProps = Picker.prototype.constructor.defaultProps;
  Picker.prototype.constructor.defaultProps = {
    ...initialDefaultProps,
    ...customProps,
  }
  Picker.prototype.render = function render() {
    let oldProps = this.props;
    this.props = { ...this.props, style: [customProps.style, this.props.style] };
    try {
      return PickerRender.apply(this, arguments);
    } finally {
      this.props = oldProps;
    }
  };
};
