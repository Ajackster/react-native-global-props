import {
  Text,
} from 'react-native';

export const setCustomText = customProps => {
  const textRender = Text.prototype.render;
  const defaultProps = Text.defaultProps;
  Text.prototype.render = function render() {
    let oldProps = this.props;
    let defaultPropsOverride = {};
    Object.entries(customProps).forEach( entry => {
      const [k, v] = entry;
      if(oldProps[k] === defaultProps[k]) {
        defaultPropsOverride[k] = v;
      }
    });
    this.props = { ...customProps, ...this.props, ...defaultPropsOverride, style: [customProps.style, this.props.style] };
    try {
      return textRender.apply(this, arguments);
    } finally {
      this.props = oldProps;
    }
  };
};
