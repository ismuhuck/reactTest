import React from 'react'

import CmtItem from '@/components/cmtItem'
// 引入css样式表 通过为元素设置类名 设置样式  默认为全局设置
// 启用css模块化后 会返回一个样式对象 且css模块化只针对类名选择器和ID选择器 不会将标签选择器模块化
// 由于启用模块化 会影响第三方模块的css加载  将自己的css文件转换为scss
import styleObj from '@/css/style.scss'
console.log(styleObj)
export default class CmtList extends React.Component {
    constructor(){
        super()
        this.state = {
            comment:[
                {id:1,name:'木哈克',content:'第一条评论'},
                {id:2,name:'卡卡罗特',content:'卡卡罗特的评论'}
            ]
        }
    }
    render(){
        return <div>
            <h1 className={[styleObj.title,"test"].join(' ')}>这是评论列表</h1>
            {this.state.comment.map( item => <CmtItem key={item.id} {...item}></CmtItem>)}
            {/* <CmtItem {...this.state.comment}></CmtItem> */}
            </div> 
    }
}