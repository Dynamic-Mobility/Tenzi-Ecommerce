import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "@/Redux/Services/Products";

const initialState = {
    products: [],
}


const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers:{
        setProducts: (state,action) =>{
            state.products = action.payload;
        }
    },
})


export const { setProducts } = productSlice.actions

export const getAllProducts = (shopId) => async (dispatch) =>{
    const data = await fetchProducts(shopId)
    console.log(data);
    dispatch(setProducts(data));
}

export default productSlice.reducer;

