import {
  WebView
} from 'react-native';

export const setCustomWebView = customProps => {
  const WebViewRender = WebView.prototype.render;
  const initialDefaultProps = WebView.prototype.constructor.defaultProps;
  WebView.prototype.constructor.defaultProps = {
    ...initialDefaultProps,
    ...customProps,
  }
  WebView.prototype.render = function render() {
    let oldProps = this.props;
    this.props = { ...this.props, style: [customProps.style, this.props.style] };
    try {
      return WebViewRender.apply(this, arguments);
    } finally {
      this.props = oldProps;
    }
  };
};
