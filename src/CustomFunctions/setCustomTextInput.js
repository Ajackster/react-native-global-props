import { TextInput } from 'react-native'

export const setCustomTextInput = customProps => {
  const TextInputRender = TextInput.render
  const initialDefaultProps = TextInput.defaultProps
  TextInput.defaultProps = {
    ...initialDefaultProps,
    ...customProps
  }
  TextInput.render = function render(props) {
    let oldProps = props
    props = { ...props, style: [customProps.style, props.style] }
    try {
      return TextInputRender.apply(this, arguments)
    } finally {
      props = oldProps
    }
  }
}
