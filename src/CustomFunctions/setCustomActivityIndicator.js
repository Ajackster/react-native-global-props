import { ActivityIndicator } from 'react-native'

export const setCustomActivityIndicator = customProps => {
  const ActivityIndicatorRender = ActivityIndicator.render
  const initialDefaultProps = ActivityIndicator.defaultProps
  ActivityIndicator.defaultProps = {
    ...initialDefaultProps,
    ...customProps
  }
  ActivityIndicator.render = function render(props) {
    let oldProps = props
    props = { ...props, style: [customProps.style, props.style] }
    try {
      return ActivityIndicatorRender.apply(this, arguments)
    } finally {
      props = oldProps
    }
  }
}
