import { Card ,CardActions,CardActionArea,CardMedia,Typography,CardContent, Button } from "@material-ui/core"
import classNames from "classnames"
import { useEffect,useState,createRef } from "react"
import useStyle from "./style"
export default ({article:{description,publishedAt,source,url,title,urlToImage},i,activeArticle}) => {
  const classes=useStyle();

  const [elRefs,setElRefs]=useState([]);
  const scrollToRef=(ref)=>window.scroll(0,ref.current.offsetTop-50);
  useEffect(()=>{
     setElRefs((refs)=>Array(20).fill().map((_, j)=>refs[j] || createRef()))
  },[])
  useEffect(()=>{
    if(i===activeArticle&&elRefs[activeArticle]){
           scrollToRef(elRefs[activeArticle])
    } 

  },[i,activeArticle,elRefs])

  return (
    <>  
     <Card ref={elRefs[i]} className={classNames(classes.card,activeArticle===i?classes.activeCard:null)}>
       <CardActionArea href={url} target="_blank">
        <CardMedia className={classes.media} image={urlToImage||"https://tse4.mm.bing.net/th?id=OIP.BvzGr1ffUtRGE0OEkyobAgHaE7&pid=Api&P=0&h=180"}/>
        <div className={classes.details}>
          <Typography variant="body2" color="textSecondry" component="h2">
            {(new Date(publishedAt)).toDateString()}
          </Typography>
          <Typography variant="body2" color="textSecondry" component="h2">
            {source.name}
          </Typography>
        </div>
        <Typography className={classes.title} gutterBottom variant="h5">{title}</Typography>
        <CardContent>
          <Typography variant="body2" color="textSecondry"component="p">{description}</Typography>
        </CardContent>
       </CardActionArea>
       <CardActions  className={classes.cardActions}>
        <Button size="small" color="primary">LernMore</Button>
        <Typography variant="h5" color="textSecondry">{i+1}</Typography>
       </CardActions>
     </Card>
    </>
  )
}
