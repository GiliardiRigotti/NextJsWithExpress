import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:3333/",
})

export const urls = {
    products: "/products",
    cart: "/cart",
}