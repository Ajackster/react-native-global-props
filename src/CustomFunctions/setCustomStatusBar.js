import { StatusBar } from 'react-native'
import extractProps from './extractProps'

export const setCustomStatusBar = customProps => {
  const StatusBarRender = StatusBar.render
  const initialDefaultProps = StatusBar.defaultProps
  StatusBar.defaultProps = {
    ...initialDefaultProps,
    ...customProps
  }
  StatusBar.render = function render(props) {
    let oldProps = props
    props = { ...props, style: [customProps.style] }

    props = extractProps(props, oldProps)

    try {
      return StatusBarRender.apply(this, arguments)
    } finally {
      props = oldProps
    }
  }
}
