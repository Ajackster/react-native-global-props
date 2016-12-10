import {
  ScrollView
} from 'react-native';

export const setCustomScrollView = customProps => {
  const scrollViewRender = ScrollView.prototype.render;
  ScrollView.prototype.render = function render() {
    let oldProps = this.props;
    this.props = { ...customProps, ...this.props, style: [customProps.style, this.props.style] };
    try {
      return scrollViewRender.apply(this, arguments);
    } finally {
      this.props = oldProps;
    }
  };
};
