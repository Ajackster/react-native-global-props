import {
  Slider
} from 'react-native';

export const setCustomSlider = customProps => {
  const SliderRender = Slider.prototype.render;
  const initialDefaultProps = Slider.prototype.constructor.defaultProps;
  Slider.prototype.constructor.defaultProps = {
    ...initialDefaultProps,
    ...customProps,
  }
  Slider.prototype.render = function render() {
    let oldProps = this.props;
    this.props = { ...this.props, style: [customProps.style, this.props.style] };
    try {
      return SliderRender.apply(this, arguments);
    } finally {
      this.props = oldProps;
    }
  };
};
