import axios from "axios";
import { API_URL } from "../Utils";

  export const fetchProducts = async(data) => {
  return new Promise((resolve,reject)=>{
    axios.get(`${API_URL.products}/${data}`,
    ).then((res) =>{
        resolve(res.data);
    })
    .catch((err) =>{
        reject(err);
    })
})
  }




