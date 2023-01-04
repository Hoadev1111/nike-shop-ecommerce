import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast'

const initialState = {
    cartState: false,
    cartItems: JSON.parse(localStorage.getItem('cart')) ?? [],//let suppose database
}

const CartSlice = createSlice({
    initialState,
    name: 'cart',
    reducers: {
        setOpenCart: (state, action) => {
            state.cartState = action.payload.cartState;
        },
        setCloseCart: (state, action) => {
            state.cartState = action.payload.cartState;
        },
        setAddItemsToCart: (state, action) => {
            const indexItem = state.cartItems.findIndex((item) => item.id === action.payload.id);
            if (indexItem >= 0) {
                state.cartItems[indexItem].cartQuantity += 1;
                toast.success('Item QTY Increased')
            } else {
                const temp = { ...action.payload, cartQuantity: 1 }
                state.cartItems.push(temp);

                toast.success(`${action.payload.title} added to cart`)
            }
            localStorage.setItem('cart', JSON.stringify(state.cartItems))
        },
        setRemoveItemFromCart: (state, action) => {
            const removeItem = state.cartItems.filter((item) => item.id !== action.payload.id);
            state.cartItems = removeItem;
            localStorage.setItem('cart', JSON.stringify(state.cartItems))

            toast.success(`${action.payload.title} removed Cart`)
        },
        setIncreaseItem: (state, action) => {
            const indexItem = state.cartItems.findIndex((item) => item.id === action.payload.id);
            if (indexItem >= 0) {
                state.cartItems[indexItem].cartQuantity += 1;
                toast.success('Item QTY Increased')
            }
            localStorage.setItem('cart', JSON.stringify(state.cartItems))
        },
        setDecreaseItem: (state, action) => {
            const indexItem = state.cartItems.findIndex((item) => item.id === action.payload.id);
            if (state.cartItems[indexItem].cartQuantity >= 1) {
                state.cartItems[indexItem].cartQuantity -= 1;
                toast.success('Item QTY Decrease!')
            }
            localStorage.setItem('cart', JSON.stringify(state.cartItems))
        },
        setEmptyItem: (state, action) => {
            state.cartItems = [];
            localStorage.setItem('cart', JSON.stringify(state.cartItems))
        }
    }
})

export const { setOpenCart, setCloseCart, setAddItemsToCart, setRemoveItemFromCart, setIncreaseItem, setDecreaseItem, setEmptyItem } = CartSlice.actions;
export const selectCartState = (state) => state.cart.cartState;
export const selectCartItem = (state) => state.cart.cartItems;
export default CartSlice.reducer 