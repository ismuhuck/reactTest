import React from 'react'

import styles from './style'
export default function CmtItem (props){
    // 行内样式
    return <div style ={ styles.item }>
        <h1 style = { styles.title }>评论人：{props.name}</h1>
        <p style = { {fontSize:'14px'} }>内容：{props.content}</p>
    </div>
}