import React, { Component } from 'react';


let defaultMediaList = [
  { el: <span >Image</span>, style: 'image' },
  { el: <span >Link</span>, style: 'link' },
  { el: <span >Video</span>, style: 'video' },

];
class mediaControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowFrame: false,
      urlValue: '',
      urlType: ''
    }
  }

  // 点击媒体
  toMediaFrame(style) {
    this.setState({
      urlType: style,
      isShowFrame: true
    })

  }
  confirmMedia() {

    this.props.confirmMedia({
      urlType: this.state.urlType,
      urlValue: this.state.urlValue,
    })


  }
  render() {
    return (
      <div className="editor-btn-group media-group">
        {
          defaultMediaList.map(item => (
            <span className="group-item" onClick={() => this.toMediaFrame(item.style)} key={item.style}>{item.el}</span>
          ))
        }
        {
          this.state.isShowFrame &&
          <div className="editor-frame">
            <input type="text" onChange={(e) => { this.setState({ urlValue: e.target.value }) }} />
            <button onClick={() => this.confirmMedia()}>确定</button>
          </div>

        }
      </div>
    );
  }
}

export default mediaControl;