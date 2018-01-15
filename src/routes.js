import React, { Component } from 'react'
import { BrowserRouter as Router,Link,Route,Redirect } from 'react-router-dom'
// import { Route,Redirect } from 'react-router'
import Login from './common/page/login/Login'
import Admin from './common/page/about/about';
import ReduxTodo from './common/page/reduxDemo/todoList';
import Reat from './common/page/reduxDemo/reat';

// const About = ()=> (
//   <div>
//     <h3>About</h3>
//   </div>
// )

const Home = ()=> (
  <div>
    <h3>Home</h3>
  </div>
)

const Message = ({ match }) => (
  <div>
    <h3>new Message</h3>
    <h3>{match.params.id}</h3>
  </div>
)

class Medd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:"nowki"
    }
  }
  render() {
    return (
      <div>
      <p>{this.state.name}</p>
      <p>{this.props.match.params.no}</p>
      <p>{this.props.match.params.id}</p>
      </div>
    )
  }

} 

const Inbox = ({ match}) => (
  <div>
    <h2>Topics</h2>
    <Link to="/inbox/messa/888">55</Link>
    <br/>
    <Link to="/inbox/messa/7777">89888</Link>
    <br/>
    <Link to="/inbox/messb/6666666666666">名字之一</Link>
    <Route path={`${match.url}/messa/:id`} component={Message}></Route>
    <Route path={`${match.url}/messb/:no`} component={Medd} />
  </div>
)

const Mebb = ( ()=> 
  <div>55555555555555</div>
)

class Mecc extends Component{
  render() {
    return (<div>888888888888</div>)
  }
}

const routes = (
  <Router>
    <div className="container">
    <Route exact path="/" component={Home}></Route>
    <Route exact path="/login" component={Login}></Route>
    <Route  path="/about" component={Admin}></Route>
    <Route  path="/mecc" component={Mecc}></Route>
    <Route path="/inbox" component={Inbox}></Route>
      <Route path="/todo" component={ReduxTodo} />
      <Route path="/reat" component={Reat} />
    {/* <Redirect from="*" to='/mecc'></Redirect> */}
    </div>
  </Router>
)

export default routes;