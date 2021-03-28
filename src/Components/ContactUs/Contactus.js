import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {useState,useEffect} from 'react';
import APISetvice from '../APIClients/APIService';
import APIService from '../APIClients/APIService';
import Alert from '@material-ui/lab/Alert';
import {Toast} from 'react-bootstrap';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Tour Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const message_style= {height:"75px",marginBottom:"25px"};
const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  header_font_color: {
    color:"white",
    marginTop:"55px"
    
  },
  paragraph_font_color: {
    color:"white",
    marginTop:"25px",
    fontSize:"15px"
  },
}));

export default function Contactus() {
  const classes = useStyles();
  const [First_name, setFname] = useState('');
  const [Last_name, setLname] = useState('');
  const [Message, setMessage] = useState('');
  const [Email_name, setEmail] = useState('');
  const [show, setShow] = useState(false);
  //const [id, setId] = useState('');
  
  const SubmitData = () => {

    var min = 1;
    var max = 10000000000;
    var rand =  min + (Math.random()*(max-min));
    console.log(Math.ceil(rand));
    var id=Math.ceil(rand);
    
    console.log({id,First_name,Last_name,Email_name,Message})
    setShow(true)
  
      APIService.ContactUs({id,First_name,Last_name,Email_name,Message})
      .catch(error =>console.log(error))
     
  }
 

  return (
    
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      
      <Grid item xs={false} sm={4} md={7} className={classes.image} >
        <h1 className={classes.header_font_color}>How can we help you? </h1>
       
        <p className={classes.paragraph_font_color}>If you have any suggestions and query then<br/> please fill out our contact form .....</p>
      
        <h1 className={classes.header_font_color}>Our Address </h1>

        <p className={classes.paragraph_font_color}>22/b Hajrat Shahjalal Airport<br/> Airport Road,Dhaka .....</p>

        <h1 className={classes.header_font_color}>Our Contact</h1>

        <p className={classes.paragraph_font_color}>019xxxxx21<br/> asdassk@gmail.com</p>
      
      </Grid>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
         
          <Typography component="h1" variant="h5">
            Send Message
          </Typography>
          <form className={classes.form} noValidate>
          
          <Grid container spacing={2}>
      
 
          <Grid item xs={12} sm={6}>
              
              <TextField
                autoComplete="fname"
                name="First_name"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                onChange={(e)=>setFname(e.target.value)}
                value={First_name}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="Last_name"
                onChange={(e)=>setLname(e.target.value)}
                value={Last_name}
                autoComplete="lname"
              />
            </Grid>
            </Grid>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="Email_name"
              onChange={(e)=>setEmail(e.target.value)}
              value={Email_name}
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="Message"
              label="Message"
              type="text"
              id="Message"
              onChange={(e)=>setMessage(e.target.value)}
              value={Message}
              autoComplete="text"
              style={message_style}
            />
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={SubmitData}
           
           >
              Submit
            </Button>



            <Toast onClose={() => setShow(false)} show={show} delay={100000} autohide>
          <Toast.Header>            
            <strong className="mr-auto text-success">Submitted</strong>
            <small>just now</small>
          </Toast.Header>
          <Toast.Body className="text-success">Woohoo, you're Text submitted successfully,Thank you.</Toast.Body>
        </Toast>
     
            <Grid container>
              <Grid item xs>
                
              </Grid>
              <Grid item>
                
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}