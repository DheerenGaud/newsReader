import React,{useEffect} from "react";
import alanBtn from "@alan-ai/alan-sdk-web"

const alenKey="739e4d64276f3a3dc5b162cf20c1619c2e956eca572e1d8b807a3e2338fdd0dc/stage"

function App() {
  useEffect(()=>{
     alanBtn({
      key:alenKey,
      onCommand:({command,articles})=>{
             if(command==='newHeadLines'){
               console.log("articles");
               console.log(articles);
             }
             if(command==='testCommand'){
               alert("hello bro")
             }
      }

     })
  },[])
  return (
   <>
    <h1>Hello</h1> 
   </>
  );
}

export default App;
