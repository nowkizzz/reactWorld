import React, { Component } from 'react';

let defaultBlockStyle = [
  { el: <span >H1</span>, style: 'header-one' },
  { el: <span >H2</span>, style: 'header-two' },
  { el: <span >H3</span>, style: 'header-three' },
  { el: <span >H4</span>, style: 'header-four' },
  { el: <span >H5</span>, style: 'header-five' },
  { el: <span >H6</span>, style: 'header-six' },
  { el: <span >普通</span>, style: 'unstyled' },
  { el: <span >引用</span>, style: 'blockquote' },
  { el: <span >代码</span>, style: 'code-block' },
  { el: <span >有序列表</span>, style: 'ordered-list-item' },
  { el: <span >无序列表</span>, style: 'unordered-list-item' },
];
class BlockStyle extends Component {
  render() {
    return (
      <div className="editor-btn-group">
        {
          defaultBlockStyle.map(item => (
            <span className="group-item" onClick={() => this.props.toggleBlockType(item.style)} key={item.style}>{item.el}</span>
          ))
        }
      </div>
    );
  }
}

export default BlockStyle;