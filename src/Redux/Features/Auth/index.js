import { createSlice } from "@reduxjs/toolkit";
import { authRequest } from "@/Redux/Services/Auth";
import jwt_decode from 'jwt-decode'

const initialState = {
    user: null,
    isLoading: false,
    isAuthenticated: false,
}


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        setAuthUser: (state,action) =>{
            state.user = action.payload;
            state.isAuthenticated = true
        },
        logout:(state,action) =>{
            state.user = null;
        }
    },
})


export const { setAuthUser, logout } = authSlice.actions

export const registerUser = (data) => async (dispatch) =>{
    const res = await authRequest.registerUser(data)
    return res;
}
export const loginUser = (data) => async (dispatch) =>{
    const res = await authRequest.loginUser(data) 
    console.log("RESPONSE ",res);
    // const decodedData = jwt_decode(res.token);
    // console.log("DECODED ",decodedData);
    localStorage.setItem('token', res.token)
    dispatch(setAuthUser(res))
    return res;
}

export const logoutUser = () =>(dispatch) =>{
    dispatch(logout())
    localStorage.removeItem('token')
}

export default authSlice.reducer;

