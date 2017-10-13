import {
  ListView
} from 'react-native';

export const setCustomListView = customProps => {
  const ListViewRender = ListView.prototype.render;
  const initialDefaultProps = ListView.prototype.constructor.defaultProps;
  ListView.prototype.constructor.defaultProps = {
    ...initialDefaultProps,
    ...customProps,
  }
  ListView.prototype.render = function render() {
    let oldProps = this.props;
    this.props = { ...this.props, style: [customProps.style, this.props.style] };
    try {
      return ListViewRender.apply(this, arguments);
    } finally {
      this.props = oldProps;
    }
  };
};
