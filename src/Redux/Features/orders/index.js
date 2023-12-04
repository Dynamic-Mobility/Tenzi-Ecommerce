import { createSlice } from "@reduxjs/toolkit";
import { orderRequest } from "@/Redux/Services/orders";

const initialState = {
    orders: []
}

const orderSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        setOrders: (state,action) =>{
            state.orders = action.payload;
        }
    }
})

export const {setOrders} = orderSlice.actions


export const createOrders = (data) => async(dispatch)=>{
    await dispatch(orderRequest.createOrder(data))
    console.log("done")
}
export default orderSlice.reducer