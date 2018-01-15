import React, { Component} from 'react'
import './index.less'

class Login extends Component {
  constructor(props) {
    super(props);
    this.loginSumbit = this.loginSumbit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.state = {
      username:"",
      password:"",
    }
  }
  loginSumbit = () => {
    if(this.state.username == '123' && this.state.password == '123') {
      alert("登录成功！");
      this.props.history.push('/about')
    } else {
      alert("登录失败！,账号密码为123");
    }
  }
  handleChange = function(e) {
    this.setState({username: e.target.value})
  }
  handlePassword = (e) => {
    this.setState({password: e.target.value})
  } 
   componentDidMount() {
    // return fetch('/api/login').then(res=>res.json()).then(data=>{
    //   console.log(data);
    // })


  (async ()=> {
      // let data = fetch('/api/login');
      try {
          let abc = await fetch('/api/login');
          let userinfo = await abc.json();
          console.log(userinfo);
      }
        catch (error) {
          console.log(error)
        }
    })()

  }
  // async componentDidMount() {
  //   let data = await fetch('/api/login');
  //   let userinfo = await data.json();
  //   console.log(userinfo)
  //   await this.setState({username: userinfo[0].userName})
  // }
  render() {
    return (
    <div className="container">
      <div className="box">
        <p className="center">welcome to the LoginPage </p>
        <span className="subName">by nowki</span>
          <div className="box-content">
            <div className="content-warp">
              <input type="text" className="account" value={this.state.username} onChange={this.handleChange} placeholder="请输入账号" />
            </div>
            <div className="content-warp">
              <input type="password" className="password" value={this.state.password} onChange={this.handlePassword} placeholder="请输入密码" />
            </div>
          <button type="button" className="login-btn" onClick={this.loginSumbit}>确定</button>
            
          </div>

      </div>
    </div>
    )
  }
}


export default Login;