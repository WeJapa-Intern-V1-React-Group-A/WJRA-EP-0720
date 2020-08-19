import { createStore } from 'redux'

import rootReducer from './rootReducer'

export const store = createStore(rootReducer)

const unsubscribe = store.subscribe(()=>console.log('object', store.getState()))

unsubscribe();