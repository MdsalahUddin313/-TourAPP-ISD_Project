import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
//import Button from '@material-ui/core/Button';
import { Button,Form,Image,Col,Row } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      height:250
    },
    media: {
      height: 140,
    },
  });

const Favindex = () => {
    const classes = useStyles();

    return (
        <div>
            <h1>Its your Wihslist </h1>
            <p>Your Cart system</p>
            
<h5 className="text-left mt-5 mb-4 p-2 container">Your Selected places</h5>

<Row className="mt-5 container m-auto">
        <Col>
        <Card className={classes.root}>
          <CardActionArea>
          <CardMedia
                   className={classes.media}
                   image="https://www.ekushey-tv.com/media/imgAll/2019December/sundarban-eb-2005200348.jpg"
                    title="Contemplative Reptile"
            />
           <CardContent>
                 <Typography className="text-left" gutterBottom variant="h6" component="h4">
                  Dal Bhat
                 </Typography>
                <Typography className="text-left" variant="body2" color="textSecondary" component="p">
                 Sylhet, 4.8 ratings (19,520) <br></br>Semititle  
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


       
       </Col>
       <Col>
       <Card className={classes.root}>
          <CardActionArea>
          <CardMedia
                   className={classes.media}
                   image="https://www.dailynayadiganta.com/resources/img/article/201903/399373_187.jpg"
                    title="Contemplative Reptile"
            />
           <CardContent>
                 <Typography className="text-left" gutterBottom variant="h6" component="h4">
                  Tehari Ghar
                 </Typography>
                <Typography className="text-left" variant="body2" color="textSecondary" component="p">
                 Shonarga, 4.8 ratings (19,520) <br></br>Semititle  
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

       </Col>
       <Col>
       <Card className={classes.root}>
          <CardActionArea>
          <CardMedia
                   className={classes.media}
                   image="https://trippainter.com/wp-content/uploads/2020/10/paharpur-buddhist-vihara-1024x576.jpg"
                    title="Contemplative Reptile"
            />
           <CardContent>
                 <Typography className="text-left" gutterBottom variant="h6" component="h4">
                  Haji biriyani
                 </Typography>
                <Typography className="text-left" variant="body2" color="textSecondary" component="p">
                 Rajshahi, 4.8 ratings (19,520) <br></br>Semititle  
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
       </Col>      
       <Col>

        <Card className={classes.root}>
          <CardActionArea>
          <CardMedia
                   className={classes.media}
                   image="https://www.ekushey-tv.com/media/imgAll/2019December/sundarban-eb-2005200348.jpg"
                    title="Contemplative Reptile"
            />
           <CardContent>
                 <Typography className="text-left" gutterBottom variant="h6" component="h4">
                  Dal Bhat
                 </Typography>
                <Typography className="text-left" variant="body2" color="textSecondary" component="p">
                 Sylhet, 4.8 ratings (19,520) <br></br>Semititle  
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


       
       </Col>   
</Row>



          
<h5 className="text-left mt-5 mb-4 p-2 container">YourCart Items</h5>

<Row className="mt-5 container m-auto">
        <Col>
        <Card className={classes.root}>
          <CardActionArea>
          <CardMedia
                   className={classes.media}
                   image="https://www.ekushey-tv.com/media/imgAll/2019December/sundarban-eb-2005200348.jpg"
                    title="Contemplative Reptile"
            />
           <CardContent>
                 <Typography className="text-left" gutterBottom variant="h6" component="h4">
                  Dal Bhat
                 </Typography>
                <Typography className="text-left" variant="body2" color="textSecondary" component="p">
                 Sylhet, 4.8 ratings (19,520) <br></br>Semititle  
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


       
       </Col>
       <Col>
       <Card className={classes.root}>
          <CardActionArea>
          <CardMedia
                   className={classes.media}
                   image="https://www.dailynayadiganta.com/resources/img/article/201903/399373_187.jpg"
                    title="Contemplative Reptile"
            />
           <CardContent>
                 <Typography className="text-left" gutterBottom variant="h6" component="h4">
                  Tehari Ghar
                 </Typography>
                <Typography className="text-left" variant="body2" color="textSecondary" component="p">
                 Shonarga, 4.8 ratings (19,520) <br></br>Semititle  
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

       </Col>
       <Col>
       <Card className={classes.root}>
          <CardActionArea>
          <CardMedia
                   className={classes.media}
                   image="https://trippainter.com/wp-content/uploads/2020/10/paharpur-buddhist-vihara-1024x576.jpg"
                    title="Contemplative Reptile"
            />
           <CardContent>
                 <Typography className="text-left" gutterBottom variant="h6" component="h4">
                  Haji biriyani
                 </Typography>
                <Typography className="text-left" variant="body2" color="textSecondary" component="p">
                 Rajshahi, 4.8 ratings (19,520) <br></br>Semititle  
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
       </Col>      
       <Col>

        <Card className={classes.root}>
          <CardActionArea>
          <CardMedia
                   className={classes.media}
                   image="https://www.ekushey-tv.com/media/imgAll/2019December/sundarban-eb-2005200348.jpg"
                    title="Contemplative Reptile"
            />
           <CardContent>
                 <Typography className="text-left" gutterBottom variant="h6" component="h4">
                  Dal Bhat
                 </Typography>
                <Typography className="text-left" variant="body2" color="textSecondary" component="p">
                 Sylhet, 4.8 ratings (19,520) <br></br>Semititle  
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


       
       </Col>   
</Row>



            
        </div>
    );
};

export default Favindex;