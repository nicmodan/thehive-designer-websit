import axios from "axios";
const basUrl =  "http://localhost:3001/api/designer"

export const getDesignerByName = async (data) =>{
    const response = await axios.get(`${basUrl}/${data}`)
    return response.data
}