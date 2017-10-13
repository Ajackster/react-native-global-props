import {
  TextInput
} from 'react-native';

export const setCustomTextInput = customProps => {
  const TextInputRender = TextInput.prototype.render;
  const initialDefaultProps = TextInput.prototype.constructor.defaultProps;
  TextInput.prototype.constructor.defaultProps = {
    ...initialDefaultProps,
    ...customProps,
  }
  TextInput.prototype.render = function render() {
    let oldProps = this.props;
    this.props = { ...this.props, style: [customProps.style, this.props.style] };
    try {
      return TextInputRender.apply(this, arguments);
    } finally {
      this.props = oldProps;
    }
  };
};
