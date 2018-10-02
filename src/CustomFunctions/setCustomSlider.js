import { Slider } from 'react-native'

export const setCustomSlider = customProps => {
  const SliderRender = Slider.render
  const initialDefaultProps = Slider.defaultProps
  Slider.defaultProps = {
    ...initialDefaultProps,
    ...customProps
  }
  Slider.render = function render(props) {
    let oldProps = props
    props = { ...props, style: [customProps.style, props.style] }
    try {
      return SliderRender.apply(this, arguments)
    } finally {
      props = oldProps
    }
  }
}
