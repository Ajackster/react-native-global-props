import { ListView } from 'react-native'
import extractProps from './extractProps'

export const setCustomListView = customProps => {
  const ListViewRender = ListView.render
  const initialDefaultProps = ListView.defaultProps
  ListView.defaultProps = {
    ...initialDefaultProps,
    ...customProps
  }
  ListView.render = function render(props) {
    let oldProps = props
    props = { ...props, style: [customProps.style] }

    props = extractProps(props, oldProps)

    try {
      return ListViewRender.apply(this, arguments)
    } finally {
      props = oldProps
    }
  }
}
