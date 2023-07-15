import React,{useEffect, useState} from "react";
import  "@material-ui/core"
import alanBtn from "@alan-ai/alan-sdk-web"
import {GetNewsData} from "./Api/api"
import NewCard from "./component/NewsCards/newCards";

const alenKey="739e4d64276f3a3dc5b162cf20c1619c2e956eca572e1d8b807a3e2338fdd0dc/stage"

function App() {
    const [newArticles,setNewArticles]=useState([])
    const [url,setUrl]=useState('')
  useEffect(()=>{
     alanBtn({
      key:alenKey,
      onCommand: async({command,NEWS_API_URL})=>{

             if(command==='newHeadlines'){
              console.log(NEWS_API_URL)
              setUrl(NEWS_API_URL);
             }
      }
     })
     
  },[])

  useEffect(()=>{
    x();
  },[url])

  const x=async()=>{
    const y= await GetNewsData(url)
    console.log(y.data);
    setNewArticles(y.data.articles)
  }
  return (
   <>
   <h1>React News ReaderApp</h1>
   <button onClick={x}>click</button>
   <NewCard  articles={newArticles}/>
   </>
  );
}
export default App;
