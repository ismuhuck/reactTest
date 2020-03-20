import React from 'react'
import ReactDOM from 'react-dom'

// jsx 语法  符合XML规范的js
let num = 10
let bool = true
let h1 = <h1>这是h1标签</h1>
let classN = "class1"
let arr = [
    <h2>这是h2</h2>,
    <h3>这是h3</h3>
]
let arrStr = ['猪八戒','唐僧','孙悟空','沙僧']
// 当在jsx中书写js表达式时需要使用 {} jsx经过babel编译之后 成为React.creatrElement()的形式 返回一个对象
const firstDiv = <div id="container" className={classN}>{num} {bool ? '值为真' : '值为假'} {h1} {arr[1 ]}
        {/* 将key添加给循环直接控制的元素  JSX的注释*/}
        {/* 在JSX内部 使用类名时使用className 代替 class lebel 标签的for使用htmlFor代替  因为这两个都是js中的关键字*/}
    {arrStr.map(item => {
       return  <h5 key={item}>{item}</h5>
    })}
</div>
ReactDOM.render(firstDiv,document.getElementById('app'))