import React from 'react'
import './index.less'
import { Route,Link,match} from 'react-router-dom'
import Tabs from '../tabs/tabs';
import ReduxDemo from '../reduxDemo/reduxDemo';

class Admin extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const routes = [
      {
        path:'/about',
        exact: true,
        key: 1,
        main: () => <h2>Home</h2>
      },
      {
        path:'/about/tabs',
        exact: true,     
        key: 2,        
        main: Tabs
      },
      {
        path:'/about/boys',
        key: 3,                
        main: ReduxDemo
      },
      {
        path:'/about/girls',
        key: 4,                
        exact: true,       
        main:() => <h3>girls</h3>
      }
    ]
    return (
      <div>

      <div style={{ display:'flex'}}>
        <div style= {{padding:'10px',width:'100px',background:'#f0f0f0'}}>
          <ul style={{ listStyle:'none',padding: 0}}>
            {routes.map((value,index)=>(
              <li key={index}><Link to={value.path}>{value.path}</Link></li>
            ))}
          </ul>
          <Link to='/about/tabs'>555555</Link>
        </div>
      </div>
        <div style={{ display: 'flex' }}>
          {
            routes.map((value,index)=>(
              <Route key={value.key} path={value.path} exact={value.exact} component={value.main}></Route>
            ))
          }
          {/* <Route  path='/about/tabs'  component= {Tabs}></Route> */}
          {/* <Route path={`${this.props.match.url}/tabs`} component={Tabs}></Route> */}

        </div>
      </div>  
    )
  }
}


export default Admin;