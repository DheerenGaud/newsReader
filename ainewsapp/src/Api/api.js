import axios from "axios"
const API_KEY = '1d6c04dc46ce476eb527d4d5a3145145';
export const  GetNewsData = async()=>{
    console.log("hellow")
    try {
        return await axios.get("https://newsapi.org/v2/everything?q=tesla&from=2023-06-17&sortBy=publishedAt&apiKey=1d6c04dc46ce476eb527d4d5a3145145")
    } catch (error) {
        console.log(error)
        console.log("error occure while get request by api")
    }
}
