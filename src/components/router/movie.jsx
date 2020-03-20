import React from 'react'

// 使用 class 创建组件
export default class Movie extends React.Component {
    constructor(props) {
        super(props)
        this.state = {//私有数据
            routeParams:props.match.params
        }
    }
    render() {
        // 输出路由参数
        console.log(this.props.match.params)
        return <div>Movie组件</div>
    }
}

