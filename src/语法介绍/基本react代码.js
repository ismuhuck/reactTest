import React from 'react'// 创建组件 虚拟DOM元素
import ReactDOM from 'react-dom'// 用于在页面上展示虚拟DOM和组件
/*
    *参数1：元素类型
    *参数2：元素属性对象
    *参数3：子元素节点或文本节点
    *参数n：子元素节点或文本节点
*/
const content = React.createElement('span',null,'这是一个span元素')
const firstDiv = React.createElement('div',{id:'container',title:'这是一个有灵性的div'},'这是div的文本节点',content)

let app = document.getElementById('app')

/**
 * 参数1：需要渲染的虚拟DOM元素
 * 参数2：容器DOM元素
*/
ReactDOM.render(firstDiv,app)