import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    padding:5,
  },
  media: {
    height: 240,
  },
  typography:{
      paddingTop:0,
  },
  learn: {
      paddingTop:0,
      fontSize:2,
  },
});

export default function CardOne_simple() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://picsum.photos/200/300?grayscale"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography className={classes.typography} gutterBottom variant="h5" component="h2">
            Lizard <ExpandMoreIcon></ExpandMoreIcon>
          </Typography>
          
        </CardContent>
      </CardActionArea>
      
       
    
    </Card>
  );
}
