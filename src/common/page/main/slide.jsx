import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu

class Slide extends Component {
    rootSubmenuKeys = ['home', 'sub1', 'sub2', 'sub3']
    state = {
        openKeys: ['home']
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

    render() {
        return (
            <Menu
                mode="inline"
                openKeys={this.state.openKeys}
                defaultSelectedKeys={['home']}
                onOpenChange={this.onOpenChange}
                defaultOpenKeys={['home']}
                style={{ width: 256 }}
            >
                <Menu.Item key="home">
                    <Icon type="mail" />
                    主页
                </Menu.Item>
                <SubMenu key="sub1" title={<span><Icon type="mail" />主页</span>}>
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
        )
    }

}


export default Slide