import React, { Component } from 'react';

let defaultInlineStyle = [
  { el: <span style={{ fontWeight: "bold" }}>B</span>, style: 'BOLD' },
  { el: <span style={{ fontStyle: "italic" }}>I</span>, style: 'ITALIC' },
  { el: <span style={{ textDecoration: "underline" }}>U</span>, style: 'UNDERLINE' },
  { el: <span className="color-show" style={{ backgroundColor: '#e24' }}></span>, style: 'RED' },
  { el: <span className="color-show" style={{ backgroundColor: '#39f' }}></span>, style: 'BLUE' },
  { el: <span className="color-show" style={{ backgroundColor: '#f93' }}></span>, style: 'ORANGE' },
  { el: <span className="color-show" style={{ backgroundColor: '#3a6' }}></span>, style: 'GREEN' },
];
class inlineStyle extends Component {
  render() {
    return (
      <div className="editor-btn-group">
        {
          defaultInlineStyle.map(item => (
            <span className="group-item" onClick={() => this.props.toggleInlineStyle(item.style)} key={item.style}>{item.el}</span>
          ))
        }
      </div>
    );
  }
}

export default inlineStyle;