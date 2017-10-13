import { KeyboardAvoidingView } from 'react-native';

export const setCustomKeyboardAvoidingView = customProps => {
  const KeyboardAvoidingViewRender = KeyboardAvoidingView.prototype.render;
  const initialDefaultProps = KeyboardAvoidingView.prototype.constructor.defaultProps;
  KeyboardAvoidingView.prototype.constructor.defaultProps = {
    ...initialDefaultProps,
    ...customProps,
  }
  KeyboardAvoidingView.prototype.render = function render() {
    let oldProps = this.props;
    this.props = { ...this.props, style: [customProps.style, this.props.style] };
    try {
      return KeyboardAvoidingViewRender.apply(this, arguments);
    } finally {
      this.props = oldProps;
    }
  };
};
