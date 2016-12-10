import {
  Modal
} from 'react-native';

export const setCustomModal = customProps => {
  const modalRender = Modal.prototype.render;
  Modal.prototype.render = function render() {
    let oldProps = this.props;
    this.props = { ...customProps, ...this.props };
    try {
      return modalRender.apply(this, arguments);
    } finally {
      this.props = oldProps;
    }
  };
};
