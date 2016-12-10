import {
  ListView
} from 'react-native';

export const setCustomListView = customProps => {
  const listViewRender = ListView.prototype.render;
  ListView.prototype.render = function render() {
    let oldProps = this.props;
    this.props = { ...customProps, ...this.props, style: [customProps.style, this.props.style] };
    try {
      return listViewRender.apply(this, arguments);
    } finally {
      this.props = oldProps;
    }
  };
};
