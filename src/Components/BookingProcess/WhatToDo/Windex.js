import React from 'react';
import './Wstyle.css';
import { makeStyles } from '@material-ui/core/styles';

import { Button,Form,Image,Col,Row } from 'react-bootstrap';
import 'react-bootstrap';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import PinDropIcon from '@material-ui/icons/PinDrop';
import LocationOnIcon from '@material-ui/icons/LocationOn';
//import 'tstyle';
import StickyFooter from '../../Footer/StickyFooter';
import CardOptions from './CardOptions';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';


const cityImages={"firstName":"John", "lastName":"Doe"} ;
const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      height:250
    },
    media: {
      height: 140,
    },
  });


const Windex = () => {
    const classes = useStyles();
    
    return (
        <div className="container">
            <h1>what to do </h1>
            <div className="row">
                <div className="col-md-8">
                <Form inline className="ml-2 d-flex justify-content-centre">
                    <Form.Group>
                     <Form.Label htmlFor="inputPassword6"></Form.Label>
                     <Form.Control
                        type="password"
                        className="mx-sm-3"
                        id="inputPassword6"
                        placeholder="Search"
                        aria-describedby="passwordHelpInline"
                          />
                          <Button className="btn btn-success">Go</Button>
                          <IconButton><PinDropIcon/></IconButton>
                     </Form.Group>
                 </Form>

                 <h3 className="text-left p-3 ml-1">Bangladesh</h3>
                <div className="imageArea mt-3 ml-3 d-flex justify-content-start">
                    <Image className="images fluid" src="https://dev.rodpub.com/images/220/443_main.jpg" alt="images"></Image>
                
                
                </div>
<h5 className="text-left mt-5 mb-4 p-2">Top Locations to Visit</h5>
                
                <div sm={2}>
                    <Row className="mt-5">
                        
                        
                        {/*Places cards */}
                        <Col>
                          
                        <Card className={classes.root}>
                          <CardActionArea>
                          <CardMedia
                                   className={classes.media}
                                   image="https://media-eng.dhakatribune.com/uploads/2019/10/sf-oct12-19-pg3-1-1571389842946.jpg"
                                    title="Contemplative Reptile"
                            />
                           <CardContent>
                                 <Typography className="text-left" gutterBottom variant="h6" component="h4">
                                  7 gombuj Masque
                                 </Typography>
                                <Typography className="text-left" variant="body2" color="textSecondary" component="p">
                                 Dhaka, 4.8 ratings (19,520) <br></br>Semititle  
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
                                   image="http://www.visitsylhet.com/images/slides/home/bichnakandi.jpg"
                                    title="Contemplative Reptile"
                            />
                           <CardContent>
                                 <Typography className="text-left" gutterBottom variant="h6" component="h4">
                                  Bisana kandi
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
                                   image="data:image/jpeg;base64,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"
                                    title="Contemplative Reptile"
                            />
                           <CardContent>
                                 <Typography className="text-left" gutterBottom variant="h6" component="h4">
                                  Lalbag kella
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

                <Row className="mt-5">
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
                                  ShonarGao
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
                                  Paharpur
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
                </Row>

<h5 className="text-left mt-5 mb-4 p-2">Top Restrurants to eat</h5>

                <Row className="mt-5">
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
                </Row>


                

<h5 className="text-left mt-5 mb-2 p-2">Top Blogs for this Sites</h5>
<p className="text-left text-muted p-2">Our suggestion Only for you.</p>
<Row className="mt-5">
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
                  Blog1
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
                 Blog2
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
                 Blog3
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
</Row>
                </div>

                </div>
                <div className="col-md-4 mapArea sticky-top" fixed="top">
                    <div >
                    <iframe className="mapFrame" src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3745518.4953527646!2d87.7923261456998!3d23.542107134361334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1stop%20tourist%20places%20in%20bangladesh!5e0!3m2!1sbn!2sbd!4v1615390259517!5m2!1sbn!2sbd" border-radius="25px" height="650" width="400" allowfullscreen="true" loading="lazy"></iframe>
                    </div>
                </div>
         
         </div>
        </div>
    );
};

export default Windex;