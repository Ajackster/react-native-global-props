import {
  TextInput
} from 'react-native';

export const setCustomTextInput = customProps => {
  const textInputRender = TextInput.prototype.render;
  TextInput.prototype.render = function render() {
    let oldProps = this.props;
    this.props = { ...customProps, ...this.props, style: [customProps.style, this.props.style] };
    try {
      return textInputRender.apply(this, arguments);
    } finally {
      this.props = oldProps;
    }
  };
};
