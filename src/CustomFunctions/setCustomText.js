import {
  Text,
} from 'react-native';

export const setCustomText = customProps => {
  const TextRender = Text.prototype.render;
  const initialDefaultProps = Text.prototype.constructor.defaultProps;
  Text.prototype.constructor.defaultProps = {
    ...initialDefaultProps,
    ...customProps,
  }
  Text.prototype.render = function render() {
    let oldProps = this.props;
    this.props = { ...this.props, style: [customProps.style, this.props.style] };
    try {
      return TextRender.apply(this, arguments);
    } finally {
      this.props = oldProps;
    }
  };
};
