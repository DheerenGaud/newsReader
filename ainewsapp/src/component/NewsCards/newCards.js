import Card from "../NewsCard/card"
import { Grid,Grow,Typography } from "@material-ui/core";
import "./model.css"
import useStyle from "./style.js"

const infoCards = [
  { color: '#00838f', title: 'Latest News', text: 'Give me the latest news' },
  { color: '#1565c0', title: 'News by Categories', info: 'Business, Entertainment, General, Health, Science, Sports, Technology', text: 'Give me the latest Technology news' },
  { color: '#4527a0', title: 'News by Terms', info: 'Bitcoin, PlayStation 5, Smartphones, Donald Trump...', text: 'What\'s up with PlayStation 5' },
  { color: '#283593', title: 'News by Sources', info: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...', text: 'Give me the news from CNN' },
];
export default ({ articles ,activeArticle,setOpenModal,setModelArticle }) => {
   const classes =useStyle()

  return (

<>

    
    <Grow in>
      <Grid className={classes.container} container alignContent="stretch" spacing={3}>
    {!articles||articles.length==0?<>
       {infoCards.map((infoCard)=>(
        <Grid className={classes.infoCard} item xs={12} sm={6} md={4} lg={3} style={{display:'flex'}}>
            <div className={classes.card} style={{backgroundColor:infoCard.color}}>
                 <Typography variant="h5">
                     {infoCard.title}
                 </Typography>
                 {
                 infoCard.info?
                 (<Typography variant="h6"> 
                 <strong>
                  {infoCard.title.split(' ')[2]}: 
                 </strong>
                 <br/>
                 {infoCard.info}
                 </Typography>):null}
                 <Typography variant="h6">try Saying: <br /> <i>{infoCard.text}</i></Typography>
            </div>
        </Grid>
       ))}
      </>:<>
      {articles.map((article, i) => (
        <Grid className={classes.container} item xs={12} sm={6} md={4} lg={3} style={{display:'flex'}}>
        <Card key={i} article={article}  activeArticle={activeArticle} setOpenModal={setOpenModal} setModelArticle={setModelArticle} i={i}/>
        </Grid>
        ))}
        </>}
      </Grid>
    </Grow>
    </>
  );
};
