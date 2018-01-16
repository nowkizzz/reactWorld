import React, { Component } from 'react';
import { Menu, Icon, Layout } from 'antd';
import './main.less';
import Tab from './pages/tab/tab'
import Home from './pages/home/home'
import Banner from './pages/banner/banner'
import {Link,Route} from 'react-router-dom'
const SubMenu = Menu.SubMenu
const { Header, Sider, Content } = Layout; 

class Slide extends Component {
    rootSubmenuKeys = ['home', 'sub1', 'sub2', 'sub3']
    state = {
        openKeys: ['home'],
        collapsed: false
    }
    options = [{
        key: 1,
        name: 'Option 1'
    }, {
        key: 2,
        name: 'Option 2'
    }, {
        key: 3,
        name: 'Option 3'
    }, {
        key: 4,
        name: 'Option 422'
    }]
    onOpenChange = (openKeys) => {
        console.log(openKeys)
        const lastestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1)
        if (this.rootSubmenuKeys.indexOf(lastestOpenKey) === -1) {
            this.setState({ openKeys })
        } else {
            this.setState({
                openKeys: lastestOpenKey ? [lastestOpenKey] : []
            })
        }
    }
    toogle = () => {
        this.setState({
            collapsed: !this.state.collapsed
        })
    }
    routes = [{
        key: 'tab',
        path: '/main/tab',
        commponent: Tab,
        exact: false
    },{
        key: 'main',
        path: '/main',
        commponent: Home,
        exact: true
    },{
        key: 'banner',
        path: '/main/banner',
        commponent: Banner,
        exact: false
    }]
    render() {
        return (
            <Layout style={{height: '100%' }}>
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                    style={{ background: '#fff' }}
                >
                <div className="logo"></div>
                <Menu
                    mode="inline"
                    openKeys={this.state.openKeys}
                    defaultSelectedKeys={['home']}
                    onOpenChange={this.onOpenChange}
                    
                >
                    <Menu.Item key="home">
                        <Link to="/main">
                            <Icon type="mail" />
                            <span>主页</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="tab"> 
                        <Link to="/main/tab">
                            <Icon type="mail" />
                            <span>选项卡页</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="banner">
                        <Link to="/main/banner">
                            <Icon type="mail" />
                            <span>封面页</span>
                        </Link>
                    </Menu.Item>
                        <SubMenu key="sub1" title={<span><Icon type="mail" /><span>主页</span></span>}>
                        {/* <Menu.Item key="1">Option 1</Menu.Item> */}
                        {/* <Menu.Item key="2">Option 2</Menu.Item> */}
                        {/* <Menu.Item key="3">Option 3</Menu.Item> */}
                        {/* <Menu.Item key="4">Option 4</Menu.Item> */}
                        {this.options.map((value, index) => (
                            <Menu.Item key={value.key}>{value.name}</Menu.Item>
                        ))}
                    </SubMenu>
                    <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
                        {this.options.map((value, index) => (
                            <Menu.Item key={value.key}>{value.name}</Menu.Item>
                        ))}
                    </SubMenu>
                </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <Icon
                            className="trigger"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toogle}
                        ></Icon>
                    </Header>
                    <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280}}>
                        {/* Content */}
                        {
                            this.routes.map((value,index)=> {
                                return (
                                    <Route key={value.key} component={value.commponent} path={value.path} exact={value.exact}></Route>
                                )
                            })
                        }
                    </Content>
                </Layout>
            </Layout>

        )
    }

}


export default Slide