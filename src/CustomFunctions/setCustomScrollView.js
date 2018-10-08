import { ScrollView } from 'react-native'

export const setCustomScrollView = customProps => {
  const ScrollViewRender = ScrollView.render
  const initialDefaultProps = ScrollView.defaultProps
  ScrollView.defaultProps = {
    ...initialDefaultProps,
    ...customProps
  }
  ScrollView.render = function render(props) {
    let oldProps = props
    props = { ...props, style: [customProps.style, props.style] }
    try {
      return ScrollViewRender.apply(this, arguments)
    } finally {
      props = oldProps
    }
  }
}
