import React from 'react';
import 'react-bootstrap';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import Tooltip from '@material-ui/core/Tooltip';
import {useState,useEffect} from 'react';
import ShareIcon from '@material-ui/icons/Share';

const useStyles = makeStyles({
    root: {
      width: 500,
    },
  });
const Like = () => {
    const classes = useStyles();
    const [Likes, setLikes] = useState(0);
    const [disLikes, setDisLikes] = useState(0);

    
    function handleLikes(){
        let like=0;
       setLikes(like+1);
    }
    const pointer={
        cursor:"pointer"
    }

    return (
        <div>
            <hr></hr>
            <div className="container m-auto text-left p-3" >
                <div className="row">
                    <Grid item xs={0}>
                    <p style={pointer} onClick={()=>setLikes(Likes+1)}>
                       <Tooltip title="Rahim" placement="bottom">
                           <ThumbUpAltIcon color="primary"></ThumbUpAltIcon>
                       </Tooltip>
                    </p>
                    </Grid>           
            
                    <Grid item xs={0}>
                      <p className="pl-2">{Likes}</p>
                    </Grid>
                  <div className="cursor-pointer" style={pointer} onClick={()=>setDisLikes(disLikes+1)}>
                      <Grid className="pl-2" item xs={0}>
                        <Tooltip title="nabid" placement="bottom">
                          <ThumbDownIcon color="secondary"></ThumbDownIcon>            
                        </Tooltip>
                       </Grid>
                  </div> 
                    <Grid item xs={0}>
                     <p className="pl-2">{disLikes}</p>
                    </Grid>
                   
                   
                    <div className="cursor-pointer" style={pointer} >
                      <Grid className="pl-5" item xs={0}>
                        <Tooltip title="Share" placement="top">
                          <ShareIcon color="primary"></ShareIcon>            
                        </Tooltip>
                       </Grid>
                  </div> 

                 </div>
            </div>
            <hr></hr>
        </div>
    );
};

export default Like;