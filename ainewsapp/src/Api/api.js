import axios from "axios"

export const  GetNewsData = async(url)=>{
    console.log("hellow")
    try {
        return await axios.get(url)
    } catch (error) {
        console.log(error)
        console.log("error occure while get request by api")
    }
}