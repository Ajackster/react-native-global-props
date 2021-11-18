import { Slider } from 'react-native'
import extractProps from './extractProps'

export const setCustomSlider = customProps => {
  const SliderRender = Slider.render
  const initialDefaultProps = Slider.defaultProps
  Slider.defaultProps = {
    ...initialDefaultProps,
    ...customProps
  }
  Slider.render = function render(props) {
    let oldProps = props
    props = { ...props, style: [customProps.style] }

    props = extractProps(props, oldProps)

    try {
      return SliderRender.apply(this, arguments)
    } finally {
      props = oldProps
    }
  }
}
