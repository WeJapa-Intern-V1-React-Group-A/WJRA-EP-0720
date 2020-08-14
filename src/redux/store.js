import { createStore } from 'redux'
import SideBarReducer from './sideBar/SideBarReducer'
import { toggleOpen } from './sideBar/SideBarAction'

export const store = createStore(SideBarReducer)

const unsubscribe = store.subscribe(()=>console.log('object', store.getState()))
store.dispatch(toggleOpen())
unsubscribe()