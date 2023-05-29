import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit"
import { CartItem, Product } from "@/interfaces";
import { RootState } from "../store";

export interface CartState {
    cardItems: CartItem[]
}

const initialState: CartState = {
    cardItems: []
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        increment: (state, action: PayloadAction<Product>) => {
            const item = state.cardItems.find((el) => el.product.id === action.payload.id)
            if (item) item.qty++
            else {
                state.cardItems.push({
                    product: action.payload,
                    qty: 1,
                })
            }
        },
        decrement: (state, action: PayloadAction<Product>) => {
            const item = state.cardItems.find((el) => el.product.id === action.payload.id)
            if (item) {
                item.qty--
                if (item.qty === 0) {
                    state.cardItems = state.cardItems.filter(
                        (el) => el.product.id !== action.payload.id
                    )
                }
            }
        }
    }
})

const cartItems = (state: RootState) => state.cart.cardItems

export const totalCartItemSelector = createSelector([cartItems], (cartItems) => cartItems.reduce((total: number, curr: CartItem) => (total += curr.qty), 0))

export const totalPriceSelector = createSelector([cartItems], (cartItems) => cartItems.reduce((total: number, curr: CartItem) => (total += curr.qty * curr.product.price), 0))

export const productQtyInCartSelector = createSelector([cartItems, (cartItems, productId: string) => productId],
    (cardItems, productId) =>
        cardItems.find((el) => el.product.id === productId)?.qty
)

export const { increment, decrement } = cartSlice.actions
export default cartSlice.reducer