import { Switch } from 'react-native'
import extractProps from './extractProps'

export const setCustomSwitch = customProps => {
  const SwitchRender = Switch.render
  const initialDefaultProps = Switch.defaultProps
  Switch.defaultProps = {
    ...initialDefaultProps,
    ...customProps
  }
  Switch.render = function render(props) {
    let oldProps = props
    props = { ...props, style: [customProps.style] }

    props = extractProps(props, oldProps)

    try {
      return SwitchRender.apply(this, arguments)
    } finally {
      props = oldProps
    }
  }
}
