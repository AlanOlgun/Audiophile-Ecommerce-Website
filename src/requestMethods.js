import axios from "axios";

const BASE_URL = "http://localhost:3002/api/"
const TOKEN = "http://localhost:3002/api/"

export const publicRequest = axios.create({
    baseURL : BASE_URL,
})

export const userRequest = axios.create({
    baseURL : BASE_URL,
    header:{token:`Bearer ${TOKEN}`}
})