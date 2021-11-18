import { WebView } from 'react-native';
import extractProps from './extractProps';

export const setCustomWebView = customProps => {
  const WebViewRender = WebView.render
  const initialDefaultProps = WebView.defaultProps
  WebView.defaultProps = {
    ...initialDefaultProps,
    ...customProps
  }
  WebView.render = function render(props) {
    let oldProps = props
    props = { ...props, style: [customProps.style] }

    props = extractProps(props, oldProps)

    try {
      return WebViewRender.apply(this, arguments)
    } finally {
      props = oldProps
    }
  }
}
