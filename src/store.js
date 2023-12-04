import { configureStore,combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./Redux/Features/Cart/cartSlice";
import productReducer from './Redux/Features/Products'
import authReducer from './Redux/Features/Auth'
import menuReducer from './Redux/Features/menus'
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
  }

  const rootReducer = combineReducers({ 
    cart: cartReducer,
    products: productReducer,
    auth: authReducer,
    menu: menuReducer,
  })

const persistedReducer = persistReducer(persistConfig,rootReducer)


export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
})

export const persistor = persistStore(store)
