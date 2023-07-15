import { Card ,CardActions,CardActionArea,CardMedia,Typography,CardContent, Button } from "@material-ui/core"

import useStyle from "./style"
export default ({article:{description,publishedAt,source,url,title,urlToImage},i}) => {
  const classes=useStyle();

  return (
    <>  
     <Card className={classes.card}>
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
