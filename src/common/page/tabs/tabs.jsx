import React from 'react'

class Tabs extends React.Component{
constructor(props) {
  super(props);
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.state = {items: [],text:''};
}
handleChange(e) {
  this.setState({text:e.target.value})
}
handleSubmit(e) {
  e.preventDefault();
  const newItem = {
    text:this.state.text,
    id: Date.now()
  }
  this.setState((preState)=> ({
    items: preState.items.concat(newItem),
    text: ''
  }))
}
  render() {
    return (
      <div style={{textAlign:'center'}}>
        <h3>TODO</h3>
        <TodoList items={this.state.items}></TodoList>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={this.state.text} />
          <button>
            {'Add #' + (this.state.items.length + 1)}
          </button>
        </form>
      </div>
    )
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item=> (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    )
  }
}

export default Tabs;