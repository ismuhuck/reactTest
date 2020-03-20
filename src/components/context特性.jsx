import React from 'react'
import ReactTypes from 'prop-types'

export default class Parent extends React.Component{
    constructor(porps){
        super(porps)
        this.state = {
            color:'red'
        }
    }
    /** 使用context特性的步骤
     * 1.在父组件中定义一个固定名称为 getChildContext()的函数 在内部必须返回一个对象 对象中的数据就是要
         共享给所有子孙的数据
     * 2.在父组件中定义静态的 childContextTypes对象 用于规定传递给子组件的数据类型
     * 3.子组件想使用父组件通过context共享的数据 ，那么在使用之前必须做一下属性校验 static contextTypes ={
     *  context中的属性值:类型         
     * }
     * 然后使用 this.context.*** 获取父组件的数据
    */
    getChildContext(){  
        return {
            color:this.state.color
        }
    }
    static childContextTypes ={
        color:ReactTypes.string
    }
    render(){
        return <div>
            <h1>父组件</h1>
            <Son></Son>
        </div>
    }
}
class Son extends React.Component{
    constructor(porps){
        super(porps)
    }
    render(){
        return <div>
            <h2>子组件</h2>
            <Grandson></Grandson>
        </div>
    }
}

class Grandson extends React.Component{
    constructor(porps){
        super(porps)
    }
    static contextTypes ={
        color:ReactTypes.string
    }
    render(){
        return <div>
            <h3 style={{color:this.context.color}}>孙子组件{this.context.color}</h3>
        </div>
    }
}