import React from 'react'

// 使用 class 创建组件
export default class Movie extends React.Component {
    constructor(props){
        super(props)//当类继承自父类并存在自己的构造函数时 必须调用super super()是父类constructor的引用
        // 调用完super之后才能使用this  组件私有数据可读可写
        this.state = {//私有数据
            msg:'我是class创建的组件的私有数据'
        }
    }
    // render函数用于渲染当前组件所对应的虚拟dom元素 且必须有返回值 为空时必须显示的返回null
    // 通过class 创建的组件 当向组件内传递参数时不需要 接收 使用时 this.props.**即可
    render (){
    return <div>这是一个movie组件 {this.props.name} <p>{this.state.msg}</p></div>
    }
}

