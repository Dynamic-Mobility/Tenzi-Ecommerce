export const API_BASE_URL = "http://soko.tenzi.africa:9000"
export const AUTH_TOKEN_KEY = 'token'

const register = 'http://soko.tenzi.africa:9000/api/Auth/Register';
const products = 'https://uat-duka.tenzi.africa/api/OnlineStore/showproducts';
const login = 'http://soko.tenzi.africa:9000/api/Auth/Login';
const getOrders = 'http://soko.tenzi.africa:9000/api/Order/GetOrders'
const createOrder = 'http://soko.tenzi.africa:9000/api/Order/CreateOrder'
const getOrdersById = 'http://soko.tenzi.africa:9000/api/Order/GetOrderById'

export const API_URL = {
    products,
    register,
    login,
    getOrders,
    createOrder,
    getOrdersById,
}