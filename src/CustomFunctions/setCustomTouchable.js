import {
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  TouchableOpacity
} from 'react-native';
import extractProps from './extractProps';

export const setCustomTouchableNativeFeedback = customProps => {
  const TouchableNativeFeedbackRender = TouchableNativeFeedback.render
  const initialDefaultProps = TouchableNativeFeedback.defaultProps
  TouchableNativeFeedback.defaultProps = {
    ...initialDefaultProps,
    ...customProps
  }
  TouchableNativeFeedback.render = function render(props) {
    let oldProps = props
    props = { ...props, style: [customProps.style] }

    props = extractProps(props, oldProps)

    try {
      return TouchableNativeFeedbackRender.apply(this, arguments)
    } finally {
      props = oldProps
    }
  }
}
export const setCustomTouchableWithoutFeedback = customProps => {
  const TouchableWithoutFeedbackRender = TouchableWithoutFeedback.render
  const initialDefaultProps = TouchableWithoutFeedback.defaultProps
  TouchableWithoutFeedback.defaultProps = {
    ...initialDefaultProps,
    ...customProps
  }
  TouchableWithoutFeedback.render = function render(props) {
    let oldProps = props
    props = { ...props, style: [customProps.style] }

    props = extractProps(props, oldProps)

    try {
      return TouchableWithoutFeedbackRender.apply(this, arguments)
    } finally {
      props = oldProps
    }
  }
}
export const setCustomTouchableOpacity = customProps => {
  const TouchableOpacityRender = TouchableOpacity.render
  const initialDefaultProps = TouchableOpacity.defaultProps
  TouchableOpacity.defaultProps = {
    ...initialDefaultProps,
    ...customProps
  }
  TouchableOpacity.render = function render(props) {
    let oldProps = props
    props = { ...props, style: [customProps.style] }

    props = extractProps(props, oldProps)

    try {
      return TouchableOpacityRender.apply(this, arguments)
    } finally {
      props = oldProps
    }
  }
}
export const setCustomTouchableHighlight = customProps => {
  const TouchableHighlightRender = TouchableHighlight.render
  const initialDefaultProps = TouchableHighlight.defaultProps
  TouchableHighlight.defaultProps = {
    ...initialDefaultProps,
    ...customProps
  }
  TouchableHighlight.render = function render(props) {
    let oldProps = props
    props = { ...props, style: [customProps.style] }

    props = extractProps(props, oldProps)

    try {
      return TouchableHighlightRender.apply(this, arguments)
    } finally {
      props = oldProps
    }
  }
}
