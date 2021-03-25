import React from 'react';
import 'react-bootstrap';
import {Form,InputGroup,Col} from 'react-bootstrap';
import AddCommentIcon from '@material-ui/icons/AddComment';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import CommentsLists from './CommentsLists';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
  root: {
      display:"flex",
    flex: '1',
    margin:'auto',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));


const CommentsSection = () => {
    const classes=useStyles();
    const pointer={
        cursor:"pointer"
    }

    return (
        <div className="container">
            <h3 className="text-left container">Comments</h3>
            <Form.Group>
               <Grid item xs={0}>
                <div className={classes.root}>
                 <Avatar className={classes.orange}>N</Avatar>
                  </div> 
               </Grid>
              <Grid item xs={8}>
              <InputGroup className="shadow p-2 ">                             
                <Form.Control
                  type="text"
                  placeholder="Write Comment...."
                  aria-describedby="inputGroupPrepend"
                  name="username"               
                />
                <InputGroup.Prepend>
                  <InputGroup.Text style={pointer} className="border-3 bg-light rounded-3 border-success" id="inputGroupPrepend"><AddCommentIcon color="primary"></AddCommentIcon></InputGroup.Text>
                </InputGroup.Prepend>
             </InputGroup>
             </Grid>
                </Form.Group>

                <CommentsLists></CommentsLists>
        </div>
    );
};

export default CommentsSection;