
// --------------Application Apis-----------//

export const API_URL = {
    FETCH_PRODUCTS: '/api/OnlineStore/showproducts',
    CREATE_ORDER: '/api/OnlineStore/createorder',
    REFRESH_TOKEN: '',
    GET_STORE_PAGES: '/v2/api/OnlineStore/GetOnlineStorePages',
    FETCH_STORE_MENU: '/v2/api/OnlineStoreManager/GetOnlineStoreNavigationMenus',
    CREATE_STORE_MENU: '/v2/api/OnlineStoreManager/CreateOnlineStoreMenu',
    DELETE_MENU_ITEM: '/v2/api/OnlineStoreManager/DeleteOnlineStoreMenuAndMenuItemsById',
    GET_STORE_PREFERENCES: '/v2/api/OnlineStore/GetOnlineStorePreferences',
    GET_STORE_DISCOUNT: '/v2/api/OnlineStore/GetOnlineStoreDiscounts',
    GET_STORE_THEME: '/v2/api/OnlineStore/GetOnlineStoreTheme',
}


//------------------------ Application APIs ----------------------//
export const APP_API_URL = {

    GET_STORE_PAGES: '/v2/api/OnlineStore/GetOnlineStorePages',
    FETCH_STORE_MENU: '/api/navigation/fetch-store-menu',
    CREATE_STORE_MENU: '/api/navigation/create-store-menu',
    GET_STORE_PREFERENCES: '/v2/api/OnlineStore/GetOnlineStorePreferences',
    DELETE_MENU_ITEM: '/api/navigation/deleteMenuItem',
    GET_STORE_DISCOUNT: '/v2/api/OnlineStore/GetOnlineStoreDiscounts',
    GET_STORE_THEME: '/v2/api/OnlineStore/GetOnlineStoreTheme',

}

export const API_METHODS = {
    GET:'GET',
    POST: 'POST',
    PATCH: 'PATCH',
    PUT: 'PUT',
    DELETE: 'DELETE'
}