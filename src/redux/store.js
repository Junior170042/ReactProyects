import { createStore } from '@reduxjs/toolkit'
import rootReducers from './reducer/index'

const store = createStore(rootReducers)

export default store;