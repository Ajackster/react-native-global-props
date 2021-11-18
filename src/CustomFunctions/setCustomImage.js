import { Image } from 'react-native'
import extractProps from './extractProps'

export const setCustomImage = customProps => {
  const ImageRender = Image.render
  const initialDefaultProps = Image.defaultProps
  Image.defaultProps = {
    ...initialDefaultProps,
    ...customProps
  }
  Image.render = function render(props) {
    let oldProps = props
    props = { ...props, style: [customProps.style] }

    props = extractProps(props, oldProps)

    try {
      return ImageRender.apply(this, arguments)
    } finally {
      props = oldProps
    }
  }
}
