import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

const CommentsLists = () => {
    const classes=useStyles();

    return (
        <div>
            <div className="container mt-5 mb-5">
                <div className="row border-info mb-3">
                    <div className="col-md-1 col-xs-1">
                            <div className={classes.root}>
                                   <Avatar alt="faceimages" src="https://st4.depositphotos.com/12982378/22072/i/600/depositphotos_220729084-stock-photo-smiling-adult-man-crossed-arms.jpg"></Avatar>
                            </div>
                    </div>
                    <div className="col-md-8 col-xs-8 text-left">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br></br>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,<br></br> when an unknown printer took a galley of type and scrambled it to make a type specimen book. <br></br>It has survived not only five centuries,</p>
                    </div>
                </div>
<hr></hr>
                <div className="row border-3 border-info">
                    <div className="col-md-1 col-xs-1">
                            <div className={classes.root}>
                                   <Avatar alt="faceimages" src="https://st4.depositphotos.com/12982378/22072/i/600/depositphotos_220729084-stock-photo-smiling-adult-man-crossed-arms.jpg"></Avatar>
                            </div>
                    </div>
                    <div className="col-md-8 col-xs-8 text-left">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br></br>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,<br></br> when an unknown printer took a galley of type and scrambled it to make a type specimen book. <br></br>It has survived not only five centuries,</p>

                    </div>
                </div>
                <hr></hr>
                <div className="row border-3 border-info">
                    <div className="col-md-1 col-xs-1">
                            <div className={classes.root}>
                                   <Avatar alt="faceimages" src="https://st4.depositphotos.com/12982378/22072/i/600/depositphotos_220729084-stock-photo-smiling-adult-man-crossed-arms.jpg"></Avatar>
                            </div>
                    </div>
                    <div className="col-md-8 col-xs-8 text-left">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br></br>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,<br></br> when an unknown printer took a galley of type and scrambled it to make a type specimen book. <br></br>It has survived not only five centuries,</p>

                    </div>
                </div>
                <hr></hr>
            </div>
        </div>
    );
};

export default CommentsLists;