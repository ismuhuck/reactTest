import React from 'react'
import ReactDOM from 'react-dom'

import Person from '@/components/component'
import Movie from "./components/movie"

let user = {
    name:'吴玉冰',
    age:'22'
}
let firstDiv = <div>
    {/* 以函数名的形式挂载组件 组件首字母必须大写 通过属性绑定的形式向组件内传递数据 组件通过设置形参来接收数据*/}
    {/* <Person attr = {user}></Person> */}
    {/* 使用扩展运算符 */}
    <Person {...user}></Person>
    <Movie name={user.name}></Movie>
    {/**两种创建组件方式的区别 
     * 使用function创建的组件没有私有数据和生命周期函数 【无状态组件】 由于没有state和生命周期函数 运行效率高于 class创建的组件
     * 当业务逻辑和UI相分离时 使用无状态组价
     * 使用class创建的组件有自己的生命周期和数据 【有状态组件】
      */}
</div>

ReactDOM.render(firstDiv,document.getElementById('app'))