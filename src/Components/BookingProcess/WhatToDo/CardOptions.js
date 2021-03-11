import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './Wstyle.css';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    height:250
  },
  media: {
    height: 140,
  },
});

export default function CardOptions(props) {
  const classes = useStyles();
  console.log(props.cityImages);

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography className="text-left" gutterBottom variant="h5" component="h2">
            Places Name
          </Typography>
          <Typography className="text-left" variant="body2" color="textSecondary" component="p">
            4.8 ratings (19,520) <br></br>Semititle  
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
