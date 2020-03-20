import React from 'react'

import { DatePicker } from 'antd';
// 使用 class 创建组件
export default class Home extends React.Component {
    constructor() {
        super()
        this.state = {//私有数据
        }
    }
    render() {
        return <div>home组件 <DatePicker></DatePicker></div>
    }
}

