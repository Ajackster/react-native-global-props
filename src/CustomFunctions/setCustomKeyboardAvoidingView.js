import { KeyboardAvoidingView } from 'react-native';

export const setCustomKeyboardAvoidingView = customProps => {
  const kbvRender = KeyboardAvoidingView.prototype.render;
  Image.prototype.render = function render() {
    let oldProps = this.props;
    this.props = { ...customProps, ...this.props };
    try {
      return kbvRender.apply(this, arguments);
    } finally {
      this.props = oldProps;
    }
  };
};
