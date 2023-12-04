import axios from "axios";
import { API_URL } from "../Utils";

  const registerUser = async(data) => {
    return new Promise((resolve,reject)=>{
      axios.post(API_URL.register, data)
      .then((res) =>{
          resolve(res.data);
      })
      .catch((err) =>{
          reject(new Error(err.message));
      })
  })
  }

  const loginUser = async(data) => {
    return new Promise((resolve,reject)=>{
      axios.post(API_URL.login, data)
      .then((res) =>{
          resolve(res.data);
      })
      .catch((err) =>{
        if (err.response.status === 401){
          reject(new Error('Wrong Username/Password Combination.'))
      }
      else{
          reject(new Error(err.message));
      }
      }
      )
  })
  }





export const authRequest = {
    registerUser,
    loginUser,
}

