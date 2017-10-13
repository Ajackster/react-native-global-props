import {
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  TouchableOpacity
} from 'react-native';

export const setCustomTouchableHighlight = customProps => {
  const TouchableHighlightRender = TouchableHighlight.prototype.render;
  const initialDefaultProps = TouchableHighlight.prototype.constructor.defaultProps;
  TouchableHighlight.prototype.constructor.defaultProps = {
    ...initialDefaultProps,
    ...customProps,
  }
  TouchableHighlight.prototype.render = function render() {
    let oldProps = this.props;
    this.props = { ...this.props, style: [customProps.style, this.props.style] };
    try {
      return TouchableHighlightRender.apply(this, arguments);
    } finally {
      this.props = oldProps;
    }
  };
};

export const setCustomTouchableNativeFeedback = customProps => {
  const TouchableNativeFeedbackRender = TouchableNativeFeedback.prototype.render;
  const initialDefaultProps = TouchableNativeFeedback.prototype.constructor.defaultProps;
  TouchableNativeFeedback.prototype.constructor.defaultProps = {
    ...initialDefaultProps,
    ...customProps,
  }
  TouchableNativeFeedback.prototype.render = function render() {
    let oldProps = this.props;
    this.props = { ...this.props, style: [customProps.style, this.props.style] };
    try {
      return TouchableNativeFeedbackRender.apply(this, arguments);
    } finally {
      this.props = oldProps;
    }
  };
};

export const setCustomTouchableWithoutFeedback = customProps => {
  const TouchableWithoutFeedbackRender = TouchableWithoutFeedback.prototype.render;
  const initialDefaultProps = TouchableWithoutFeedback.prototype.constructor.defaultProps;
  TouchableWithoutFeedback.prototype.constructor.defaultProps = {
    ...initialDefaultProps,
    ...customProps,
  }
  TouchableWithoutFeedback.prototype.render = function render() {
    let oldProps = this.props;
    this.props = { ...this.props, style: [customProps.style, this.props.style] };
    try {
      return TouchableWithoutFeedbackRender.apply(this, arguments);
    } finally {
      this.props = oldProps;
    }
  };
};

export const setCustomTouchableOpacity = customProps => {
  const TouchableOpacityRender = TouchableOpacity.prototype.render;
  const initialDefaultProps = TouchableOpacity.prototype.constructor.defaultProps;
  TouchableOpacity.prototype.constructor.defaultProps = {
    ...initialDefaultProps,
    ...customProps,
  }
  TouchableOpacity.prototype.render = function render() {
    let oldProps = this.props;
    this.props = { ...this.props, style: [customProps.style, this.props.style] };
    try {
      return TouchableOpacityRender.apply(this, arguments);
    } finally {
      this.props = oldProps;
    }
  };
};
