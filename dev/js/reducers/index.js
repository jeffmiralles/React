import {combineReducers} from "redux"
import UserReducer from "./reducer-users" //imports the default function

const allReducers = combineReducers({ //combine into one big object
    users: UserReducer // the object willl be the way to refer this on the application
})