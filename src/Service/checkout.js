import axios from "axios";

const url = "https://thehive.fly.dev/api/thehivecatlog"

export const postCheckout = async(req) =>{
    const response = await axios.post(url, req)
    return response.data
}