import React,{Component} from 'react'
// import { Button, Rate  } from 'antd';
import Slide from './slide'
// import {Route} from 'react-router-dom'
// import Home from './pages/home/home'
// import Tab from './pages/tab/tab'
class Main extends Component {

    render() {
        return (
            <div className="main">
                {/* <div className="leftNav">
                </div>
                <div className="content">
                    <Route path="/main" exact component={Home}></Route>
                    <Route path="/main/tab"  component={Tab}></Route>
                </div> */}
                {/* <Button type="primary">Button</Button> */}
                {/* <Rate/> */}
                <Slide></Slide>
                
            </div>
        )
    }
}


export default Main