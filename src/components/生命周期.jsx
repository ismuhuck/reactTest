// 计数器组件 react生命周期函数
import React from 'react'
import ReactTypes from 'prop-types'  //react类型校验包

export default class Counter extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            count:props.initcount,
            msg:'这是父组件的msg消息'
        }
    }
    // 通过静态的defaultProps 属性 来这只默认的属性值
    static defaultProps = {
        initcount:0
    }
    static propTypes ={
        initcount:ReactTypes.number
    }
    componentWillUnmount(){
        // 在组件挂载到页面前 执行 此时内存中的DOM尚未开始渲染，但数据和方法已经可以正常访问
    }
    // render 函数开始渲染内存中的虚拟DOM render 执行完毕后虚拟DOM渲染完毕 但尚未挂载到页面上
    render(){
        return <div>
            <h3>计数器组件</h3>

            <button onClick = {() => {this.countFun()}}>+1</button>
            <h4 ref = 'h4' id = 'myh4'>{this.state.count}</h4>
            <input type="button" value="更改msg" onClick = { () => {this.updateMsg()}}/>
            <Son pmsg = {this.state.msg}></Son>
        </div>
    }
    componentDidMount(){
        // 当组件挂载到页面上之后会进入这个生命周期函数  最早可以在这个函数中操作DOM元素 之后组件进入运行中的状态 创建阶段完毕
    }
    updateMsg = () => {
        this.setState({
            msg:'msg被修改了'
        })
    }
    countFun = () => {
        this.setState ( {
            count:this.state.count+1
        } )
    }

    //   进入组件的运行周期

    shouldComponentUpdate(nextProps,nextState){
        // 判断组件是否需要被更新 需要返回一个布尔值
        // 当返回 false 时会退回运行中的状态 不会执行后续的生命周期 由于后续的render函数没有没调用 
        // 所以页面不会被修改 但状态值会被更改 
        // 在shouldComponentUpdate  this.state.count 为旧数据 并非当前最新值
        // if( nextState.count%2 ===0){
        //     return true
        // }
        // else{
        //     return false
        // }
        // return nextState.count%2 === 0 ? true : false
        return true
    }
    componentWillUpdate(){
        // 组件将要被更新 内存中的虚拟DOM 和 页面中的DOM 均为旧数据 
        console.log(this.refs.h4) // 新DOM
        console.log(this.refs.h4.innerHTML)//旧数据
        console.log(document.getElementById('myh4').innerHTML)
    }
    componentDidUpdate(){
        // 组件完成了更新
    }
}

class Son extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return <div> 
            这是子组件 
            <p>{this.props.pmsg}</p>
        </div>
    }
    componentWillReceiveProps(nextProps){
        // 组件将要接收外界传递过来的新的props值  初次加载时并不会被触发 通过操作再次更改时触发
        console.log(this.props.pmsg)//旧值
        console.log(nextProps.pmsg)// 新值
    }
}