import {
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  TouchableOpacity
} from 'react-native';

export const setCustomTouchableHighlight = customProps => {
  const touchableHighlightRender = TouchableHighlight.prototype.render;
  TouchableHighlight.prototype.render = function render() {
    let oldProps = this.props;
    this.props = { ...customProps, ...this.props, style: [customProps.style, this.props.style] };
    try {
      return touchableHighlightRender.apply(this, arguments);
    } finally {
      this.props = oldProps;
    }
  };
};

export const setCustomTouchableNativeFeedback = customProps => {
  const touchableNativeFeedbackRender = TouchableNativeFeedback.prototype.render;
  TouchableNativeFeedback.prototype.render = function render() {
    let oldProps = this.props;
    this.props = { ...customProps, ...this.props, style: [customProps.style, this.props.style] };
    try {
      return touchableNativeFeedbackRender.apply(this, arguments);
    } finally {
      this.props = oldProps;
    }
  };
};

export const setCustomTouchableWithoutFeedback = customProps => {
  const touchableWithoutFeedbackRender = TouchableWithoutFeedback.prototype.render;
  TouchableWithoutFeedback.prototype.render = function render() {
    let oldProps = this.props;
    this.props = { ...customProps, ...this.props, style: [customProps.style, this.props.style] };
    try {
      return touchableWithoutFeedbackRender.apply(this, arguments);
    } finally {
      this.props = oldProps;
    }
  };
};

export const setCustomTouchableOpacity = customProps => {
  const touchableOpacityRender = TouchableOpacity.prototype.render;
  TouchableOpacity.prototype.render = function render() {
    let oldProps = this.props;
    this.props = { ...customProps, style: [customProps.style, this.props.style], ...this.props };
    try {
      return touchableOpacityRender.apply(this, arguments);
    } finally {
      this.props = oldProps;
    }
  };
};
