import axios from "axios";
import dayjs from "dayjs";
import { API_URL } from "@/utils/api-endpoints";
import { logoutUser } from "@/Redux/Features/Auth";
import { setAuthUser } from "@/Redux/Features/Auth";


const useAxios = dispatch =>{
    const { setAuthUser, logout,refreshToken } = useAuth;
    const axiosInstance = axios.create({
        baseURL: process.env.NEXT_PUBLIC_BASE_URL,
        headers: { Authorization : `bearer ${setAuthUser?.token}` }
    })

    axiosInstance.interceptors.request.use(async req => {
        const isExpired = dayjs.unix(setAuthUser.exp).diff(dayjs()) < 1;

        if (!isExpired) {
            return req;
        }

        // refresh token
        const response = axios.post(`${API_URL.REFRESH_TOKEN}`,{
            token: setAuthUser.token,
            refreshToken: setAuthUser?.refreshToken
        })

        if(response.statusCode !== 200){
            await dispatch(logoutUser());
        }

        const { data } = response;
        await refreshToken(data.token, data.refreshToken);
        req.headers.Authorization = `Bearer ${data.token}`;

        return req
    })

    axiosInstance.interceptors.response.use(
        response => {
            return response;
        },
        async err => {
            const originalConfig = err.config;
            if (err.response) {
                // Access Token was expired
                if (err.response?.status === 401) {
                    await logout();
                }
                if (err.response?.status === 403 && err.response.data) {
                    return Promise.reject(err.response.data);
                }
            }
            return Promise.reject(err);
        },
    );

    return axiosInstance;
}

export default useAxios;
