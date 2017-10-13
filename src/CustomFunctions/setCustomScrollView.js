import {
  ScrollView
} from 'react-native';

export const setCustomScrollView = customProps => {
  const ScrollViewRender = ScrollView.prototype.render;
  const initialDefaultProps = ScrollView.prototype.constructor.defaultProps;
  ScrollView.prototype.constructor.defaultProps = {
    ...initialDefaultProps,
    ...customProps,
  }
  ScrollView.prototype.render = function render() {
    let oldProps = this.props;
    this.props = { ...this.props, style: [customProps.style, this.props.style] };
    try {
      return ScrollViewRender.apply(this, arguments);
    } finally {
      this.props = oldProps;
    }
  };
};
