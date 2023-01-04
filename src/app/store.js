import { configureStore } from '@reduxjs/toolkit'
import { createStoreHook } from 'react-redux'
import CartSlice from './CartSlice'


const Store = configureStore({
    reducer: {
        cart: CartSlice
    }
})

export default Store