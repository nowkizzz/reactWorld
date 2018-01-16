import React,{Component} from 'react'
import './banner.less'
import cx from 'classnames'
class Banner extends Component {
    constructor() {
        super()
        this.activeLi = this.activeLi.bind(this)
        this.state = {
            isActive: 'home'
        }
    }
    activeLi(e) {
        console.log(e)
        console.log(e.target.name)
    }
    changeActive(e) {
        console.log(e)
        
        return 'active'
    }
    render() {
        return (
            <div className="container">
                <div className="homeNav">
                    <ul >
                        <li className="active"  onClick={this.activeLi}>
                            <a href="#" name="home">首页</a>
                        </li>
                        <li type="about" onClick={this.activeLi} className={cx({ active: true, bate: this.state.isActive})}>
                            <a href="#" name="about">关于我们</a>
                        </li>
                        <li type="products" onClick={this.activeLi}>
                            <a href="#" name="products">产品展示</a>
                        </li>
                        <li type="honor" onClick={this.activeLi}>
                            <a href="#" name="honor">荣誉资质</a>
                        </li>
                        <li type="news" onClick={this.activeLi}>
                            <a href="#" name="news">新闻中心</a>
                        </li>
                        <li type="contact" onClick={this.activeLi}>
                            <a href="#" name="contact">联系我们</a>
                        </li>
                    </ul>
                </div>
            </div>

        )
    }
}

export default Banner