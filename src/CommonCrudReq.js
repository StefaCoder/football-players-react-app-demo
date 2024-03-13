import axios from "axios";
require('dotenv').config()

const baseURL = `${process.env.BASE_API_URL}`

export const axiosInstance = axios.create({
    baseURL,
    headers: {
        "Content-type": "application/json"
    } 
})
