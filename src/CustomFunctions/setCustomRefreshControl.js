import { RefreshControl } from 'react-native'
import extractProps from './extractProps'

export const setCustomRefreshControl = customProps => {
  const RefreshControlRender = RefreshControl.render
  const initialDefaultProps = RefreshControl.defaultProps
  RefreshControl.defaultProps = {
    ...initialDefaultProps,
    ...customProps
  }
  RefreshControl.render = function render(props) {
    let oldProps = props
    props = { ...props, style: [customProps.style] }

    props = extractProps(props, oldProps)

    try {
      return RefreshControlRender.apply(this, arguments)
    } finally {
      props = oldProps
    }
  }
}
