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
import {useEffect,useState} from 'react';
import Typography from '@material-ui/core/Typography';
import {useParams,Link} from 'react-router-dom';
import './Wstyle.css';


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
    const [LocationValue, setLocationValue] = useState([]);
    const [search, setSearch] = useState([]);
    const [idValue, setIdValue] = useState(0);
    let {id} =useParams();


    const locationUrl=`http://127.0.0.1:8000/api/apis/locations/`+id+`/`;
    
    
 useEffect(() => {
   fetch(locationUrl,{
       'method':'GET',
       headers:{
           'Content-Type':'application/json',
           'Authorization':`Token d03ef30f3aa3b550c60d69d1134a7b38d10526e2` 

       }
   }).then(res =>res.json())
   .then(res=>setLocationValue(res))    
   .catch(err=>console.log(err))
}, [])
  
    {console.log(LocationValue)}


    const handleSearch = () =>{
        console.log("Clicked me");
        console.log(LocationValue.Location_name)
       
    }

    

     
    return (
        <div className="container">
            <h1 className="p-4 m-4 text_header text-info" >what to do </h1>
            <div className="row">
                <div className="col-md-8">
                <Form inline className="ml-2 d-flex justify-content-centre">
                    <Form.Group>
                     <Form.Label htmlFor="inputPassword6"></Form.Label>
                     <Form.Control
                        type="text"
                        className="mx-sm-3"
                        id="inputText"
                        placeholder="Search"
                        aria-describedby=""
                        value={search}
                        onChange={(e)=>setSearch(e.target.value)}
                          />
                          <Button onClick={()=>handleSearch()} className="btn btn-success">Go</Button>
                          <IconButton><PinDropIcon/></IconButton>
                     </Form.Group>
                 </Form>
                 {console.log(search)}
                 <h3 className="text-left p-3 ml-1">{LocationValue.Location_name}</h3>
                <div className="imageArea mt-3 ml-3 d-flex justify-content-start">
                    <Image className="images fluid" src={LocationValue.Location_image} alt="images"></Image>
                
                
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
                                   image={LocationValue.location_image_one}
                                    title="Contemplative Reptile"
                            />
                           <CardContent>
                                 <Typography className="text-left" gutterBottom variant="h6" component="h4">
                                  {LocationValue.location_one}
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



                       </Col>



                       <Col>
                        
                        <Card className={classes.root}>
                          <CardActionArea>
                          <CardMedia
                                   className={classes.media}
                                   image={LocationValue.location_image_two}
                                    title="Contemplative Reptile"
                            />
                           <CardContent>
                                 <Typography className="text-left" gutterBottom variant="h6" component="h4">
                                  {LocationValue.location_name_two}
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


</Col>
                       <Col>
                            
                        <Card className={classes.root}>
                          <CardActionArea>
                          <CardMedia
                                   className={classes.media}
                                   image={LocationValue.location_image_three}
                                    title="Contemplative Reptile"
                            />
                           <CardContent>
                                 <Typography className="text-left" gutterBottom variant="h6" component="h4">
                                 {LocationValue.location_name_three}
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

                
<h5 className="text-left mt-5 mb-4 p-2">Top Hotels to stay</h5>

                <Row className="mt-5">
                        <Col>
                        <Card className={classes.root}>
                          <CardActionArea>
                          <CardMedia
                                   className={classes.media}
                                   image={LocationValue.Hotels_image_one}
                                    title="Contemplative Reptile"
                            />
                           <CardContent>
                              <Link to="/hotelsBooking">
                                 <Typography className="text-left" gutterBottom variant="h6" component="h4">
                                 {LocationValue.Hotels_name_one}
                                 </Typography>
                              </Link>
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
                                   image={LocationValue.Hotels_image_two}
                                    title="Contemplative Reptile"
                            />
                           <CardContent>
                           <Link to="/hotelsBooking">
                                 <Typography className="text-left" gutterBottom variant="h6" component="h4">
                                 {LocationValue.Hotels_name_two}
                                 </Typography>
                                 </Link>
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

                       </Col>
                       <Col>
                       <Card className={classes.root}>
                          <CardActionArea>
                          <CardMedia
                                   className={classes.media}
                                   image={LocationValue.Hotels_image_three}
                                    title="Contemplative Reptile"
                            />
                           <CardContent>
                           <Link to="/hotelsBooking">
                                 <Typography className="text-left" gutterBottom variant="h6" component="h4">
                                 {LocationValue.Hotels_name_three}
                                 </Typography>
                                 </Link>
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
                    <iframe className="mapFrame" src={LocationValue.Location_map} border-radius="25px" height="650" width="400" allowfullscreen="true" loading="lazy"></iframe>
                    </div>
                </div>
         
         </div>
        </div>
    );
};

export default Windex;