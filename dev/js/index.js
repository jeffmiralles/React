import 'babel-polyfill'
import React from 'react'
import ReactDOM from "react-dom"
import {Provider} from "react-redux"
import {createStore} from "redux"
import allReducers from "./reducers" //default to importing index.js

const store = createStore(allReducers) //redux storage for all of the objects, Main application storage

ReactDOM.render(<h1>Hey now</h1>, document.getElementById('root'))



