import {
  WebView
} from 'react-native';

export const setCustomWebView = customProps => {
  const WebViewRender = WebView.render
  const initialDefaultProps = WebView.defaultProps
  WebView.defaultProps = {
    ...initialDefaultProps,
    ...customProps
  }
  WebView.render = function render(props) {
    let oldProps = props
    props = { ...props, style: [customProps.style, props.style] }
    try {
      return WebViewRender.apply(this, arguments)
    } finally {
      props = oldProps
    }
  }
}
