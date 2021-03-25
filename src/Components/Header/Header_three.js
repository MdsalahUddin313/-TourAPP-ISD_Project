import React from 'react';
import { fade, makeStyles,useTheme} from '@material-ui/core/styles';
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
import clsx from 'clsx'; 
import Drawer from '@material-ui/core/Drawer';
//import DrawerWidth from '@material-ui/core/Drawer';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import TripOriginIcon from '@material-ui/icons/TripOrigin';
import TrainIcon from '@material-ui/icons/Train';

import CameraEnhanceIcon from '@material-ui/icons/CameraEnhance';
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';
import FlightIcon from '@material-ui/icons/Flight';
import ExploreIcon from '@material-ui/icons/Explore';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import TimelineIcon from '@material-ui/icons/Timeline';
import PlaceIcon from '@material-ui/icons/Place';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ClassIcon from '@material-ui/icons/Class';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import ViewCarouselIcon from '@material-ui/icons/ViewCarousel';
import HomeIcon from '@material-ui/icons/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HotelIndex from '../Property_holders/Hotels/HotelIndex';
import Carosoul_Inputs from '../SurfaceInputs/Carosoul_Inputs';
import Ratingsbar from '../SurfaceInputs/Ratingsbar';


const drawerWidth = 240;


const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },

  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(0),
    marginLeft: theme.spacing(6),
  },

}));

export default function Header_three() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);


const handleopenLink=()=>{

}
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}><a href="http://127.0.0.1:8000/admin/">Profile</a></MenuItem>
      <MenuItem onClick={handleMenuClose}><a href="http://127.0.0.1:8000/admin/">My account</a></MenuItem>
      <MenuItem onClick={handleMenuClose}><Link to="/signup">Registration</Link></MenuItem>
    
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
       <Link to="http://127.0.0.1:8000/admin/"> <p>Profile</p></Link>
      </MenuItem>
    
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
        <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          
          
          <Typography className={classes.title} variant="h6" noWrap>
          <span color="secondary">Tour</span> App  
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
        

        <Link to="/">
          <ListItem button>
            
            <ListItemIcon><HomeIcon/></ListItemIcon>
            <ListItemText><Typography>Home</Typography></ListItemText>           
          </ListItem>
          </Link>


        <Link to="/trip">
          <ListItem button>
            
            <ListItemIcon><TripOriginIcon/></ListItemIcon>
            <ListItemText><Typography>Trip</Typography></ListItemText>           
          </ListItem>
          </Link>



        <Link to="/whatTodo">
          <ListItem button>
            <ListItemIcon><ExploreIcon/></ListItemIcon>
            <ListItemText><Typography>Explore</Typography></ListItemText>
          </ListItem>
        </Link>



        <Link to="/planeBooking">
          <ListItem button>
            <ListItemIcon><FlightIcon/></ListItemIcon>
            <ListItemText><Typography>Flights</Typography></ListItemText>
          </ListItem>
        </Link>


        

        <Link to="/busbook">
          <ListItem button>
            <ListItemIcon><DirectionsBusIcon/></ListItemIcon>
            <ListItemText><Typography>Buses</Typography></ListItemText>
          </ListItem>
        </Link>

        <Link to="/trainbook">
          <ListItem button>
            <ListItemIcon><TrainIcon/></ListItemIcon>
            <ListItemText><Typography>Train</Typography></ListItemText>
          </ListItem>
        </Link>


        <Link to="/hotelsBooking">
          <ListItem button>
            <ListItemIcon><HomeWorkIcon/></ListItemIcon>
            <ListItemText><Typography>Hotels</Typography></ListItemText>
          </ListItem>
        </Link>




        
        <Link to="/timeline">
          <ListItem button>
            <ListItemIcon><TimelineIcon/></ListItemIcon>
            <ListItemText><Typography>Your Timeline</Typography></ListItemText>
          </ListItem>
        </Link>



        <Link to="/favplace">
          <ListItem button>
            <ListItemIcon><FavoriteIcon/></ListItemIcon>
            <ListItemText><Typography>Favourite Places</Typography></ListItemText>
          </ListItem>
        </Link>



        <Link to="/blogpost">
          <ListItem button>
            <ListItemIcon><ViewCarouselIcon/></ListItemIcon>
            <ListItemText><Typography>Blogs</Typography></ListItemText>
          </ListItem>
        </Link>

         
        <Divider />
        <Link to="/aboutus">
          <ListItem button>            
            <ListItemIcon><ClassIcon/></ListItemIcon>
            <ListItemText><Typography>About Us</Typography></ListItemText>
          </ListItem>
        </Link> 

        <Link to="/contactus">
          <ListItem button>            
            <ListItemIcon><ContactSupportIcon/></ListItemIcon>
            <ListItemText><Typography>Contact Us</Typography></ListItemText>
          </ListItem>
        </Link> 

         </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        
        <Switch>
        <Route exact path='/headertwo/explore' component={Ratingsbar}/>


        </Switch>
       
        
       

      </main>

      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
