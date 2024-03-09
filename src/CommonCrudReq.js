import axios from "axios";
require('dotenv').config()

export default axios.create({
    baseURL: `http://localhost:${process.env.PORT}/api`,
    headers: {
        "Content-type": "application/json"
    }
})