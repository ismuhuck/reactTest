import React from 'react'
/**
 * HashRouter 表示一个路由的跟容器，所有与路由相关的东西，都要包裹在里面
 * Router 表示一个路由规则，两个较为重要的属性 path component
 * Link 表示一个路由的链接
 */
import { HashRouter, Link, Router, Route } from 'react-router-dom'
import Home from './home'
import Movie from './movie'
import About from './about'
// 使用 class 创建组件
export default class App extends React.Component {
    constructor() {
        super()
        this.state = {//私有数据
            msg: '我是class创建的组件的私有数据'
        }
    }
    render() {
        // 当使用HashRouter 把App根组件 元素包裹起来时，网站就已经启用路由了
        return <HashRouter>
            <div>
                <h1>这是网站根组件</h1>
                <Link to="/home">首页</Link>
                <Link to="/movie/top250/10">电影</Link>
                <Link to="/about">关于</Link>
                {/* router 充当了匹配规则和占位符 即router在哪所匹配到的路由组件就在哪展示
                    默认情况下，路由是模糊匹配的，如果路由可以部分匹配成功，就会展示这个路由对应的组件
                    如果要精确匹配需添加 exact 属性

                    如果要匹配参数 可以在匹配规则中添加：修饰符 表示这个位置匹配到的是参数
                */}
                <Route path ="/home" component ={Home}></Route>
                <Route exact path ="/movie/:type/:id" component ={Movie}></Route>
                <Route path ="/about" component ={About}></Route>
            </div>
        </HashRouter>
    }
}

