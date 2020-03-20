import React from 'react'

//#region 可折叠注释区间

//#endregion 
export default class BindEven extends React.Component {
    constructor(props){
        super(props)
        this.state={
            msg:'这是数据'
        }
    }
    render(){
        return <div>
            事件绑定组件
            {/* react 采用 驼峰式 事件命名 且必须为一个函数 */}
            <button onClick = {function () {console.log('输出')}}>点击我</button>
            <button onClick = { () => this.show('参数1') }>改变数据</button>
            <h3>{this.state.msg}</h3>
            {/* input 文本框的双向数据绑定
                 input 绑定state中的值时 为可读  必须为其添加readOnly 属性 或者添加onChange 事件 在onChange 事件中
                拿到最新的数据 并修改状态值  实现双向数据流
                onChange 事件获取文本框的值：
                1.通过事件参数e获取
                2.使用ref 获取元素的引用 
            */}
            <input type="text" value={this.state.msg} onChange = { (e) => this.textChange(e)}  ref = "text"/>
        </div>
    }
    textChange = (e) => {
        console.log(e.target.value)
        console.log(this.refs.text.value)
        this.setState({
            msg:e.target.value
        })
    }
    // 在react中使用 React.setState({},callback)修改状态值 这个方法为异步方法  修改之后如果想立即拿到新值 需要使用它的回调
    show = (arg) => {
        this.setState({
            msg:'改变状态值' + arg
        },function(){
            console.log(this.state.msg)
        })
    }
}