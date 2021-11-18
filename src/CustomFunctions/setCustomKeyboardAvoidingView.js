import { KeyboardAvoidingView } from 'react-native'
import extractProps from './extractProps'

export const setCustomKeyboardAvoidingView = customProps => {
  const KeyboardAvoidingViewRender = KeyboardAvoidingView.render
  const initialDefaultProps = KeyboardAvoidingView.defaultProps
  KeyboardAvoidingView.defaultProps = {
    ...initialDefaultProps,
    ...customProps
  }
  KeyboardAvoidingView.render = function render(props) {
    let oldProps = props
    props = { ...props, style: [customProps.style] }

    props = extractProps(props, oldProps)

    try {
      return KeyboardAvoidingViewRender.apply(this, arguments)
    } finally {
      props = oldProps
    }
  }
}
