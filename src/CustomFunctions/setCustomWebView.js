import {
  WebView
} from 'react-native';

export const setCustomWebView = customProps => {
  const webViewRender = WebView.prototype.render;
  WebView.prototype.render = function render() {
    let oldProps = this.props;
    this.props = { ...customProps, ...this.props, style: [customProps.style, this.props.style] };
    try {
      return webViewRender.apply(this, arguments);
    } finally {
      this.props = oldProps;
    }
  };
};
