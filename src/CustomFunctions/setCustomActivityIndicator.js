import { ActivityIndicator } from 'react-native'
import extractProps from './extractProps'

export const setCustomActivityIndicator = customProps => {
  const ActivityIndicatorRender = ActivityIndicator.render
  const initialDefaultProps = ActivityIndicator.defaultProps
  ActivityIndicator.defaultProps = {
    ...initialDefaultProps,
    ...customProps
  }
  ActivityIndicator.render = function render(props) {
    let oldProps = props
    props = { ...props, style: [customProps.style] }

    props = extractProps(props, oldProps)

    try {
      return ActivityIndicatorRender.apply(this, arguments)
    } finally {
      props = oldProps
    }
  }
}
