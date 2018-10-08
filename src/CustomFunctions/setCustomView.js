import {
  View
} from 'react-native';

export const setCustomView = customProps => {
  const ViewRender = View.render
  const initialDefaultProps = View.defaultProps
  View.defaultProps = {
    ...initialDefaultProps,
    ...customProps
  }
  View.render = function render(props) {
    let oldProps = props
    props = { ...props, style: [customProps.style, props.style] }
    try {
      return ViewRender.apply(this, arguments)
    } finally {
      props = oldProps
    }
  }
}
