import { createSlice } from "@reduxjs/toolkit";
import { fetchStoreMenus } from "@/Redux/Services/Navigation";


const initialState = {
  menus: [],
};

const MenuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setMenu: (state, action) => {
      state.menus = action.payload;
    },
  },
});

export const { setMenu } = MenuSlice.actions;


export const getAllMenus = (auth) => async (dispatch) => {
  try {
    const response = await fetchStoreMenus(auth);
    dispatch(setMenu(response));
  } catch (error) {
    console.log("MENUS_ERROR ", error);
  }
};


export default MenuSlice.reducer;
