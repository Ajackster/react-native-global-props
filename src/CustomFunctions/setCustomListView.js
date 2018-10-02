import { ListView } from 'react-native'

export const setCustomListView = customProps => {
  const ListViewRender = ListView.render
  const initialDefaultProps = ListView.defaultProps
  ListView.defaultProps = {
    ...initialDefaultProps,
    ...customProps
  }
  ListView.render = function render(props) {
    let oldProps = props
    props = { ...props, style: [customProps.style, props.style] }
    try {
      return ListViewRender.apply(this, arguments)
    } finally {
      props = oldProps
    }
  }
}
