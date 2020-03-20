import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/router/app'
import {HashRouter,Route,Link} from 'react-router-dom'

let firstDiv = <div>
    <App></App>
</div>

ReactDOM.render(firstDiv,document.getElementById('app'))