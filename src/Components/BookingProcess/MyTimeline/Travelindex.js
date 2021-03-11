import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
//import Button from '@material-ui/core/Button';
import { Button,Form,Image,Col,Row } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      height:250
    },
    media: {
      height: 140,
    },
    gallery:{
        height:200,
    }
  });
const Travelindex = () => {
    const classes = useStyles();
    return (
        <div>
            <h1>Your visited Places record</h1>
            <p>Your visited places gallery</p>

                 
<h5 className="text-left mt-5 mb-4 p-2 container">Your Visited places</h5>

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
                  Sundarbans
                 </Typography>
                <Typography className="text-left" variant="body2" color="textSecondary" component="p">
                 Khulna, 4.8 ratings (19,520) <br></br>Last visited 2.12.2020  
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
                  Lalbag kella
                 </Typography>
                <Typography className="text-left" variant="body2" color="textSecondary" component="p">
                 Dhaka, 4.8 ratings (19,520) <br></br>Last visited 2.12.2020   
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
                  Paharpur
                 </Typography>
                <Typography className="text-left" variant="body2" color="textSecondary" component="p">
                 Rajshahi, 4.8 ratings (19,520) <br></br>Last visited 2.12.2020   
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
                  Ratargul
                 </Typography>
                <Typography className="text-left" variant="body2" color="textSecondary" component="p">
                 Sylhet, 4.8 ratings (19,520) <br></br>Last visited 2.12.2020   
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



          
<h5 className="text-left mt-5  container">Gallery</h5>
<p className="text-left container"><Link to="/createnewGallary">Create New</Link></p>
<p className="text-left  container">Sundarbans 2.12.2020</p>

<Row className="mt-5 container m-auto pb-5">
        <Col>
        <Card className={classes.gallery}>
          <CardActionArea>
          <CardMedia
                   className={classes.gallery}
                   image="https://www.ekushey-tv.com/media/imgAll/2019December/sundarban-eb-2005200348.jpg"
                    title="Contemplative Reptile"
            />
            </CardActionArea>
           </Card>


       
       </Col>
       <Col>
       <Card className={classes.gallery}>
          <CardActionArea>
          <CardMedia
                   className={classes.gallery}
                   image="https://www.ekushey-tv.com/media/imgAll/2019December/sundarban-eb-2005200348.jpg"
                    title="Contemplative Reptile"
            />
            </CardActionArea>
           </Card>
       </Col>

       <Col>
       <Card className={classes.gallery}>
          <CardActionArea>
          <CardMedia
                   className={classes.gallery}
                   image="https://www.ekushey-tv.com/media/imgAll/2019December/sundarban-eb-2005200348.jpg"
                    title="Contemplative Reptile"
            />
            </CardActionArea>
           </Card>
       </Col>

       <Col>
       <Card className={classes.gallery}>
          <CardActionArea>
          <CardMedia
                   className={classes.gallery}
                   image="https://www.ekushey-tv.com/media/imgAll/2019December/sundarban-eb-2005200348.jpg"
                    title="Contemplative Reptile"
            />
            </CardActionArea>
           </Card>
       </Col>


       <Col>
       <Card className={classes.gallery}>
          <CardActionArea>
          <CardMedia
                   className={classes.gallery}
                   image="https://www.ekushey-tv.com/media/imgAll/2019December/sundarban-eb-2005200348.jpg"
                    title="Contemplative Reptile"
            />
            </CardActionArea>
           </Card>
       </Col>



     
</Row>


        </div>
    );
};

export default Travelindex;