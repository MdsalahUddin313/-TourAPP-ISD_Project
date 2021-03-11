import logo from './logo.svg';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import './App.css';
import Header from './Components/Header/Header'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import '@material-ui/core/';
import Carousel from 'react-bootstrap/Carousel';
import HomePage from './Components/HomePage';
import { BrowserRouter as Router,Route,Switch,Link } from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
import Error from './Components/Errors/Error';
import Testing from './Components/Testing/Testing';
import SignInSide from './Components/Authintication/SignInSide';
import SignUp from './Components/Authintication/SignUp';
import Checkout from './Components/PymentProcess/Checkout';
import Blog from './Components/Blogs/Blogs';
import RecipeReviewCard from './Components/SurfaceInputs/RecipeReviewCard';
import Carosoul_Inputs from './Components/SurfaceInputs/Carosoul_Inputs';
import ImageGridList from './Components/SurfaceInputs/ImageGridList';
import StickyFooter from './Components/Footer/StickyFooter';
import LeftBar from './Components/SurfaceInputs/LeftBar';
import Contactus from './Components/ContactUs/Contactus';
import Cindex from './Components/ContactUs/Cindex';
import AboutIndex from './Components/Aboutus/AboutIndex';
import HotelIndex from './Components/Property_holders/Hotels/HotelIndex';
import TransportIndex from './Components/Property_holders/Transpots/TransportIndex';
import SingleHotelPage from './Components/Property_holders/Hotels/SingleHotelPage';
import DestinationForm from './Components/SurfaceInputs/DestinationForm';
import Steps from './Components/SurfaceInputs/Steps';
import StepsIndex from './Components/StepsForTourplan/StepsIndex';
import Logintesting from './Components/Testing/BlogPosts/Logintesting';
import {useCookies} from 'react-cookie';
import {useHistory} from 'react-router-dom';
import {CookiesProvider} from 'react-cookie';
import BlogsIndex from './Components/Testing/BlogPosts/BlogsIndex';
import Header_two from './Components/Header/Header_two';
import Header_three from './Components/Header/Header_three';
import Trip from './Components/BookingProcess/Trip/Trip';
import Windex from './Components/BookingProcess/WhatToDo/Windex';
import HIndex from './Components/BookingProcess/HotelsSelection/HIndex';
import Tindex from './Components/BookingProcess/TrainBooking/Tindex';
import Pindex from './Components/BookingProcess/PlaneSelect/Pindex';
import Vindex from './Components/BookingProcess/VacationRent/Vindex';
//import TravelIndex from './Components/BookingProcess/MyTimeline/TravelIndex';
import Travelindex from './Components/BookingProcess/MyTimeline/Travelindex';
import Favindex from './Components/BookingProcess/FavouritePlaces/Favindex';
import CreateNewGallery from './Components/BookingProcess/MyTimeline/CreateNewGallery';

function App() {
  return (
    <Router>
    <div className="App">
       
       <Switch>
         <Route exact path='/blogs' component={Blog}/>
         <Route exact path='/aboutus' component={AboutIndex}/>
         <Route exact path='/trainbook' component={Tindex}/>

       </Switch>
    <Header_three/>
  
    <Switch>
    <Route exact path='/login' component={Logintesting}/>
<Route exact path='/'><HomePage/></Route> 
<Route exact path='/testing' component={Testing}/>
<Route exact path='/signin' component={SignInSide}/>
<Route exact path='/signup' component={SignUp}/>
<Route exact path='/checkout' component={Checkout}/>
<Route exact path='/carosoul' component={Carosoul_Inputs}/>
<Route exact path='/grids' component={StickyFooter}/>
<Route exact path='/leftbars' component={LeftBar}/>
<Route exact path='/contactus' component={Cindex}/>
<Route exact path='/hotels' component={HotelIndex}/>
<Route exact path='/singlehotels' component={SingleHotelPage}/>
<Route exact path='/transports' component={TransportIndex}/>
<Route exact path='/tourplan' component={StepsIndex}/>
<Route exact path='/hotelsBooking' component={HIndex}/>

<Route exact path='/blogpost' component={Blog}/>
<Route exact path='/headertwo' component={Header_three}/>
<Route exact path='/trip' component={Trip}/>
<Route exact path='/whatTodo' component={Windex}/>
<Route exact path='/planeBooking' component={Pindex}/>
<Route exact path='/vacation' component={Vindex}/>
<Route exact path='/timeline' component={Travelindex}/>
<Route exact path='/favplace' component={Favindex}/>
<Route exact path='/createnewGallary' component={CreateNewGallery}/>







      

      

     


    





     
      <Route exact path='*' component={Error}/>


    </Switch>
    </div>
    </Router>
  );
}

export default App;


/*


<CookiesProvider>
      <BrowserRouter>
     
      </BrowserRouter>
      </CookiesProvider>

*/