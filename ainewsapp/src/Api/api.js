import axios from "axios"
const API_KEY = '1d6c04dc46ce476eb527d4d5a3145145';
export const  GetNewsData = async(url)=>{
    console.log("hellow")
    try {
        return await axios.get(url)
    } catch (error) {
        console.log(error)
        console.log("error occure while get request by api")
    }
}
