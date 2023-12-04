import { axiosInstance } from "@/Components/axiosinstance";
import { API_URL } from "../Utils";

export const getOrders = async () => {
  return new Promise((resolve, reject) => {
    axiosInstance
      .get(API_URL.getOrders)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const getOrderbyId = async(orderId) => {
    return new Promise((resolve, reject) => {
        axiosInstance
          .get(`${API_URL.getOrdersById}/${orderId}`)
          .then((res) => {
            resolve(res.data);
          })
          .catch((err) => {
            reject(err);
          });
      });
}

export const createOrder = async (data) => {
    const products = [];
    data.products.map((prod) => products.push({
        "productId": prod.productId,
        "productName": prod.productName,
        "price": prod.productPrice,
        "discount": prod.discount,
        "quantity": prod.quantity,
        "imagePath": prod.imagePath
    }))
    const formData = {
        "totalPrice": data.totalPrice,
        "totalDiscount": data.totalDiscount,
        "actualPrice": data.actualPrice,
        "quantity": data.quantity,
        "paymentMode": data.content,
        "shippingAddress": data.shippingAddress,
        "products": products
      }
    

  return new Promise((resolve, reject) => {
    axiosInstance
      .post(API_URL.createOrder, formData)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const orderRequest = {
  createOrder,
  getOrders,
  getOrderbyId,
};
