import {
  StatusBar
} from 'react-native';

export const setCustomStatusBar = customProps => {
  const StatusBarRender = StatusBar.prototype.render;
  const initialDefaultProps = StatusBar.prototype.constructor.defaultProps;
  StatusBar.prototype.constructor.defaultProps = {
    ...initialDefaultProps,
    ...customProps,
  }
  StatusBar.prototype.render = function render() {
    let oldProps = this.props;
    this.props = { ...this.props, style: [customProps.style, this.props.style] };
    try {
      return StatusBarRender.apply(this, arguments);
    } finally {
      this.props = oldProps;
    }
  };
};
