import {
  Image
} from 'react-native';

export const setCustomImage = customProps => {
  const imageRender = Image.prototype.render;
  Image.prototype.render = function render() {
    let oldProps = this.props;
    this.props = { ...customProps, ...this.props, style: [customProps.style, this.props.style] };
    try {
      return imageRender.apply(this, arguments);
    } finally {
      this.props = oldProps;
    }
  };
};
