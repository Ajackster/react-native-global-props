import {
  Switch
} from 'react-native';

export const setCustomSwitch = customProps => {
  const SwitchRender = Switch.prototype.render;
  const initialDefaultProps = Switch.prototype.constructor.defaultProps;
  Switch.prototype.constructor.defaultProps = {
    ...initialDefaultProps,
    ...customProps,
  }
  Switch.prototype.render = function render() {
    let oldProps = this.props;
    this.props = { ...this.props, style: [customProps.style, this.props.style] };
    try {
      return SwitchRender.apply(this, arguments);
    } finally {
      this.props = oldProps;
    }
  };
};
