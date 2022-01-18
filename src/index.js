import 'bpk-stylesheets/base'
import 'bpk-stylesheets/base.css'
import 'bpk-stylesheets/font'
import 'bpk-stylesheets/font.css'

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import('jquery')

ReactDOM.render(React.createElement(App), document.getElementById('root'))
