import {
  Modal
} from 'react-native';

export const setCustomModal = customProps => {
  const ModalRender = Modal.prototype.render;
  const initialDefaultProps = Modal.prototype.constructor.defaultProps;
  Modal.prototype.constructor.defaultProps = {
    ...initialDefaultProps,
    ...customProps,
  }
  Modal.prototype.render = function render() {
    let oldProps = this.props;
    this.props = { ...this.props, style: [customProps.style, this.props.style] };
    try {
      return ModalRender.apply(this, arguments);
    } finally {
      this.props = oldProps;
    }
  };
};
