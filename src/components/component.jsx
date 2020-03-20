import React from 'react'

// 抽离 react组件
// props为一个只读属性不可修改
// 1.使用函数创建组件 接收父组件传递的参数时 必须显示的声明props形参
export default function Person (props){
    // console.log(props)
    // 组件内部必须有返回值 当返回值为null时  则表示该组件为空 
    return <div>这是一个组件{props.name} </div>
}
