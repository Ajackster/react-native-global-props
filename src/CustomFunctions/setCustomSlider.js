import {
  Slider
} from 'react-native';

export const setCustomSlider = customProps => {
  const sliderRender = Slider.prototype.render;
  Slider.prototype.render = function render() {
    let oldProps = this.props;
    this.props = { ...customProps, style: [customProps.style, this.props.style], ...this.props };
    try {
      return sliderRender.apply(this, arguments);
    } finally {
      this.props = oldProps;
    }
  };
};
