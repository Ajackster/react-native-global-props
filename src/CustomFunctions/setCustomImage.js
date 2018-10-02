import { Image } from 'react-native'

export const setCustomImage = customProps => {
  const ImageRender = Image.render
  const initialDefaultProps = Image.defaultProps
  Image.defaultProps = {
    ...initialDefaultProps,
    ...customProps
  }
  Image.render = function render(props) {
    let oldProps = props
    props = { ...props, style: [customProps.style, props.style] }
    try {
      return ImageRender.apply(this, arguments)
    } finally {
      props = oldProps
    }
  }
}
