import React,{useEffect, useState} from "react";
import  "@material-ui/core"
import alanBtn ,{ playText } from "@alan-ai/alan-sdk-web"
import wordsToNumber from 'words-to-numbers'
import {GetNewsData} from "./Api/api"
import NewCard from "./component/NewsCards/newCards";

const alenKey="739e4d64276f3a3dc5b162cf20c1619c2e956eca572e1d8b807a3e2338fdd0dc/stage"

function App() {
    const [newArticles,setNewArticles]=useState([])
    const [active,setactive]=useState(-1)
    const [url,p]=useState("")
  useEffect(()=>{
     alanBtn({
      key:alenKey,
      onCommand: async({command,articles,number})=>{

             if(command==='newHeadlines'){
               setNewArticles(articles)
               setactive(-1)
             }
             else if(command==='highlight'){
                setactive((prevActiveArticle)=>prevActiveArticle+1);
             }
             else if( command==='open'){
                const  actualNumber= number.length > 2 ? wordsToNumber(number,{fuzzy:true}): number;
                const article=articles[actualNumber-1];
                if(actualNumber>20){
                    console.log(actualNumber);
                    alert("Article not found .")
                    // playText("Article not found! .Please try that again.")
                }
                else{
                    window.open(article.url,"_blank")
                    // playText("Opening ...")
                }
             }
      }
     })
     
  },[])

//   useEffect(()=>{
//     x();
//   },[url])

//   const x=async()=>{
//     const y= await GetNewsData(url)
//     console.log(y.data);
//     setNewArticles(y.data.articles)
//   }
  return (
   <>
   <h1>Dheru News Reader App</h1>
     
   <NewCard  articles={newArticles} activeArticle={active}/>
   </>
  );
}
export default App;
