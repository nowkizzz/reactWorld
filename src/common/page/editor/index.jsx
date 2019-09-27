import React, { Component } from 'react';
import { Editor, EditorState, RichUtils, convertToRaw, convertFromHTML, convertFromRaw, ContentState, AtomicBlockUtils } from 'draft-js'
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import InlineStyle from './inlineStyle.jsx'
import BlockStyle from './blockStyle.jsx'
import MediaControl from './mediaControl.jsx'
import './index.less'
import Immutable from 'immutable';
// import './Draft.css'
function mediaBlockRenderer(block) {
  console.log('====================================');
  console.log(block.getType());
  console.log('====================================');
  if (block.getType() === 'atomic') {
    return {
      component: Media,
      editable: false,
    };
  }
  return null;
}
const styles = {
  root: {
    fontFamily: '\'Georgia\', serif',
    padding: 20,
    width: 600,
  },
  buttons: {
    marginBottom: 10,
  },
  urlInputContainer: {
    marginBottom: 10,
  },
  urlInput: {
    fontFamily: '\'Georgia\', serif',
    marginRight: 10,
    padding: 3,
  },
  editor: {
    border: '1px solid #ccc',
    cursor: 'text',
    minHeight: 80,
    padding: 10,
  },
  button: {
    marginTop: 10,
    textAlign: 'center',
  },
  media: {
    width: '100%',
  },
};

const Audio = (props) => {
  return <audio controls src={props.src} style={styles.media} />;
};

const Image = (props) => {
  return <img src={props.src} style={styles.media} />;
};

const Video = (props) => {
  return <video controls src={props.src} style={styles.media} />;
};

const Media = (props) => {
  const entity = props.contentState.getEntity(
    props.block.getEntityAt(0)
  );
  const { src } = entity.getData();
  const type = entity.getType();

  let media;
  if (type === 'audio') {
    media = <Audio src={src} />;
  } else if (type === 'image') {
    media = <Image src={src} />;
  } else if (type === 'video') {
    media = <Video src={src} />;
  } else {
    media = null;
  }
  return media;
};
class PaneEditor extends Component {
  constructor(props) {
    super(props);
    // raw内容转为editor显示
    const rawContent = {
      blocks: [
        {
          text: '这里是文本内容，下面是一张图片',
          type: 'unstyled'
        },
        // {
        //     text: '![图片](https://avatars2.githubusercontent.com/u/9550456?v=4&s=460)',
        //     type: 'unstyled'
        // }
      ],
      entityMap: {}
    }
    const blocks = convertFromRaw(rawContent)

    // HTML格式转换为editor显示
    let htmlText = '<p>阿打算多撒</p>'
    const blocksFromHtml = htmlToDraft(htmlText);
    const { contentBlocks, entityMap } = blocksFromHtml;
    const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
    this.state = {
      // 初始化空的内容
      editorState: EditorState.createEmpty(),
      // 添加内容
      // editorState: EditorState.createWithContent(blocks)
      // html内容
      // editorState: EditorState.createWithContent(contentState)
    };
    this.toggleInlineStyle = this.toggleInlineStyle.bind(this)
    // this.onChange = this.onChange.bind(this)
    this.onChange = (editorState) => {
      console.log('====================================');
      console.log(editorState);
      console.log('====================================');
      this.setState({ editorState })
    };
  }
  // 行内样式
  toggleInlineStyle(style) {
    let state = RichUtils.toggleInlineStyle(this.state.editorState, style);
    this.onChange(state);
  }
  // 块状样式
  toggleBlockType(style) {
    let state = RichUtils.toggleBlockType(this.state.editorState, style);
    this.onChange(state)
  }
  // 媒体控制
  confirmMedia(value) {
    console.log('====================================');
    console.log(value);
    console.log('====================================');
    const { editorState } = this.state;
    const contentState = editorState.getCurrentContent();
    const imageSrc = value.urlValue;
    // AtomicBlockUtils插入图片
    const contentStateWithEntity = contentState.createEntity(
      value.urlType,
      'IMMUTABLE',
      {
        src: imageSrc
      }
    )
    const entityKey = contentStateWithEntity.getLastCreatedEntityKey()
    const newEditorState = EditorState.set(editorState, {
      currentContent: contentStateWithEntity
    })
    const newNewEditorState = AtomicBlockUtils.insertAtomicBlock(
      newEditorState,
      entityKey,
      '  '
    )
    this.setState({
      editorState: newNewEditorState
    })
  }
  submit() {
    // draft转为json
    let rawContentState = convertToRaw(this.state.editorState.getCurrentContent())
    // json转为html
    const markup = draftToHtml(
      rawContentState,
      // hashtagConfig, 
      // directional, 
      // customEntityTransform
    );
    console.log('====================================');
    console.log(markup);
    console.log('====================================');
  }
  render() {
    // let defaultInlineStyle = [
    //   { el: <span style={{ fontWeight: "bold" }}>B</span>, style: 'BOLD' },
    //   { el: <span style={{ fontStyle: "italic" }}>I</span>, style: 'ITALIC' },
    //   { el: <span style={{ textDecoration: "underline" }}>U</span>, style: 'UNDERLINE' },
    //   { el: <span><div className="color-show" style={{ backgroundColor: '#e24' }}></div></span>, style: 'RED' },
    //   { el: <span><div className="color-show" style={{ backgroundColor: '#39f' }}></div></span>, style: 'BLUE' },
    //   { el: <span><div className="color-show" style={{ backgroundColor: '#f93' }}></div></span>, style: 'ORANGE' },
    //   { el: <span><div className="color-show" style={{ backgroundColor: '#3a6' }}></div></span>, style: 'GREEN' }
    // ];
    // 自定义 
    let customColorStyleMap = {
      'RED': { color: '#e24' },
      'BLUE': { color: '#39f' },
      'ORANGE': { color: '#f93' },
      'GREEN': { color: '#3a6' }
    };
    const blockRenderMap = Immutable.Map({
      'header-one': {
        element: 'h1'
      },
      'header-two': {
        element: 'h2'
      },
      'unstyled': {
        element: 'p'
      }
    });
    return (
      <div className="editorPane">
        <p>基础编辑器</p>
        <div className="editorHeader">
          {/* <span onClick={() => this.toggleInlineStyle('BOLD')}>BOLD</span> */}
          {/* <span onClick={() => this.toggleInlineStyle('RED')}>RED</span> */}
          <InlineStyle toggleInlineStyle={this.toggleInlineStyle.bind(this)}></InlineStyle>
          <BlockStyle toggleBlockType={this.toggleBlockType.bind(this)}></BlockStyle>
          <MediaControl confirmMedia={this.confirmMedia.bind(this)}></MediaControl>
        </div>
        <div className="editorContainer" >
          <Editor
            ref="editor"
            editorState={this.state.editorState}
            placeholder={'请输入文字'}
            onChange={this.onChange}
            customStyleMap={customColorStyleMap}
            blockRendererFn={mediaBlockRenderer}
          // blockRenderMap={blockRenderMap}
          ></Editor>
        </div>
        <button className="editorSumbit" onClick={() => this.submit()}>
          提交
        </button>
      </div>
    );
  }
}


export default PaneEditor;