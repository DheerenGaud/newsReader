import React,{useEffect, useState} from "react";
import  "@material-ui/core"
import alanBtn ,{ playText } from "@alan-ai/alan-sdk-web"
import wordsToNumber from 'words-to-numbers'
import {GetNewsData} from "./Api/api"
import NewCard from "./component/NewsCards/newCards";
import Modal from "./component/model/model";
import "./app.css";

const alenKey="739e4d64276f3a3dc5b162cf20c1619c2e956eca572e1d8b807a3e2338fdd0dc/stage"

function App() {
    // const [isModalOpen, setModalOpen] = useState(false);
    const [newArticles,setNewArticles]=useState([])
    const [modelArticle,setModelArticle]=useState({"source":{"id":"handelsblatt","name":"Handelsblatt"},"author":"Handelsblatt","title":"Dow Jones, S&P 500, Nasdaq: US-Anleger vor Zahlensaison vorsichtig optimistisch","description":"Anleger halten sich an der Wall Street zurück und warten auf weitere Signale. Die US-Wirtschaft steuert derweil aus Sicht von Finanzministerin Yellen nicht mehr auf eine Rezession zu.","url":"https://www.handelsblatt.com/finanzen/maerkte/marktberichte/dow-jones-sundp-500-nasdaq-us-anleger-vor-zahlensaison-vorsichtig-optimistisch/29262668.html","urlToImage":"https://www.handelsblatt.com/images/wall-street/28864482/11-format2003.jpg","publishedAt":"2023-07-17T16:19:09Z","content":"Wall Street\r\nNew York US-Anleger haben am Montag den anrollenden Firmenbilanzen zuversichtlich entgegengeblickt. Der Dow-Jones-Index der Standardwerte notierte gegen Mittag 0,2 Prozent höher bei 34.5… [+1035 chars]"},{"source":{"id":"handelsblatt","name":"Handelsblatt"},"author":"Handelsblatt","title":"Dow Jones, S&P 500, Nasdaq: Sommer-Rally in New York: US-Leitindex Dow Jones schließt auf Jahreshöchststand","description":"Anleger blicken positiv auf die kommenden Firmenbilanzen. Belastend wirkt, dass die chinesische Wirtschaft sich aufgrund der schwachen globalen Nachfrage nur langsam erholt.","url":"https://www.handelsblatt.com/finanzen/maerkte/marktberichte/dow-jones-sundp-500-nasdaq-sommer-rally-in-new-york-us-leitindex-dow-jones-schliesst-auf-jahreshoechststand/29262668.html","urlToImage":"https://www.handelsblatt.com/images/wall-street/28864482/11-format2003.jpg","publishedAt":"2023-07-17T16:19:09Z","content":"Wall Street\r\nNew York US-Anleger haben am Montag den anrollenden Firmenbilanzen zuversichtlich entgegengeblickt. Der US-Leitindex Dow Jones schloss 0,2 Prozent fester mit 34.585 Punkten und damit auf… [+1038 chars]"})
    const [active,setActive]=useState(-1)
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
      const alanInstance = alanBtn({
        key: alenKey,
        onCommand: async ({ command, articles, number }) => {
          if (command === 'newHeadlines') {
            setNewArticles(articles);
            setActive(-1);
          } else if (command === 'highlight') {
            setActive((prevActiveArticle) => prevActiveArticle + 1);
          } else if (command === 'open') {
            const actualNumber = number.length > 2 ? wordsToNumber(number, { fuzzy: true }) : number;
            const article = articles[actualNumber - 1];
            if (actualNumber > 20) {
              alert('Article not found.');
            } else {
              window.open(article.url, '_blank');
            }
          } else if (command === 'read') {
            const actualNumber = number.length > 2 ? wordsToNumber(number, { fuzzy: true }) : number;
            if (actualNumber > 20) {
              alert('Article not found.');
            } else {
              const article = articles[actualNumber - 1];
              setModelArticle(article);
              setModalOpen(true);
              alanInstance.playText('Opening ...');
              alanInstance.playText(article.title);
              alanInstance.playText(article.description);
              // alanInstance.playText(article.content);

              // setModalOpen(false);
              
            }
          }
        },
      });
    }, []);

  useEffect(()=>{
    x();
  },[])

  
  
  const x=async()=>{
    // const y= await GetNewsData()
    // console.log(y.data);
    // setNewArticles(y.data.articles)
  }

  return (
   <>
     <div className="App">
      <h1>Welcome to Dheru News Reader...</h1>
      {/* <button
        className="openModalBtn"
        onClick={() => {
          setModalOpen(true);
        }}
      > */}
        {/* Open
      </button> */}

      {modalOpen && <Modal setOpenModal={setModalOpen} article={modelArticle}/>}
        
      {!modalOpen &&<NewCard  articles={newArticles} activeArticle={active} setOpenModal={setModalOpen} setModelArticle={setModelArticle}/>}
    </div>
   </>
  );
}
export default App;


// if(command==='newHeadlines'){
//   setNewArticles(articles)
//   setactive(-1)
// }
// else if(command==='highlight'){
//    setactive((prevActiveArticle)=>prevActiveArticle+1);
// }
// else if( command==='open'){
//    const  actualNumber= number.length > 2 ? wordsToNumber(number,{fuzzy:true}): number;
//    const article=articles[actualNumber-1];
//    if(actualNumber>20){
//        console.log(actualNumber);
//        alert("Article not found .")
//    }
//    else{
//        window.open(article.url,"_blank")
//    }
// }
// else if(command==='read'){
//  const  actualNumber= number.length > 2 ? wordsToNumber(number,{fuzzy:true}): number;
//  const article=articles[actualNumber-1];
//  if(actualNumber>20){
//      console.log(actualNumber);
//      alert("Article not found .")
//      // playText("Article not found! .Please try that again.")
//  }
//  else{
//    const article=articles[actualNumber-1];
//    setModelArticle(article);
//    setModalOpen(true);
//    alanBtn.playText("Opening");
//  }