import {
  Image
} from 'react-native';

export const setCustomImage = customProps => {
  const ImageRender = Image.prototype.render;
  const initialDefaultProps = Image.prototype.constructor.defaultProps;
  Image.prototype.constructor.defaultProps = {
    ...initialDefaultProps,
    ...customProps,
  }
  Image.prototype.render = function render() {
    let oldProps = this.props;
    this.props = { ...this.props, style: [customProps.style, this.props.style] };
    try {
      return ImageRender.apply(this, arguments);
    } finally {
      this.props = oldProps;
    }
  };
};
