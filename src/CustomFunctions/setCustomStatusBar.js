import { StatusBar } from 'react-native'

export const setCustomStatusBar = customProps => {
  const StatusBarRender = StatusBar.render
  const initialDefaultProps = StatusBar.defaultProps
  StatusBar.defaultProps = {
    ...initialDefaultProps,
    ...customProps
  }
  StatusBar.render = function render(props) {
    let oldProps = props
    props = { ...props, style: [customProps.style, props.style] }
    try {
      return StatusBarRender.apply(this, arguments)
    } finally {
      props = oldProps
    }
  }
}
