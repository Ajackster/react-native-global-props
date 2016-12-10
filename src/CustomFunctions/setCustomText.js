import {
  Text,
} from 'react-native';

export const setCustomText = customProps => {
  const textRender = Text.prototype.render;
  Text.prototype.render = function render() {
    let oldProps = this.props;
    this.props = { ...customProps, ...this.props, style: [customProps.style, this.props.style] };
    try {
      return textRender.apply(this, arguments);
    } finally {
      this.props = oldProps;
    }
  };
};
