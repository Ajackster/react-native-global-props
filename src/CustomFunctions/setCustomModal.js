import { Modal } from 'react-native'

export const setCustomModal = customProps => {
  const ModalRender = Modal.render
  const initialDefaultProps = Modal.defaultProps
  Modal.defaultProps = {
    ...initialDefaultProps,
    ...customProps
  }
  Modal.render = function render(props) {
    let oldProps = props
    props = { ...props, style: [customProps.style, props.style] }
    try {
      return ModalRender.apply(this, arguments)
    } finally {
      props = oldProps
    }
  }
}
