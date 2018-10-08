import { RefreshControl } from 'react-native'

export const setCustomRefreshControl = customProps => {
  const RefreshControlRender = RefreshControl.render
  const initialDefaultProps = RefreshControl.defaultProps
  RefreshControl.defaultProps = {
    ...initialDefaultProps,
    ...customProps
  }
  RefreshControl.render = function render(props) {
    let oldProps = props
    props = { ...props, style: [customProps.style, props.style] }
    try {
      return RefreshControlRender.apply(this, arguments)
    } finally {
      props = oldProps
    }
  }
}
