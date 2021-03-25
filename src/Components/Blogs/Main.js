import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Markdown from './Markdown';
import {Card,Button,Image} from 'react-bootstrap';
import {useEffect ,useState,createContext} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useParams,
  useRouteMatch
} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
}));

const cardImages={height:'400px'}
export default function Main(props) {
  const classes = useStyles();
  const { posts, title } = props;
  const [articleValue, setArticleValue] = useState([]);
  const [dataSets,setDataSets] = useState([]);

  
  
  useEffect(() => {fetch("http://127.0.0.1:8000/api/apis/articles/",{
    'method':'GET',
    headers:{
      'Content-Type':'application/json',
      'Authorization':'Token d03ef30f3aa3b550c60d69d1134a7b38d10526e2'
    }
  }).then(res =>res.json())
  .then(res=>setArticleValue(res))  
  .catch(err=>console.log(err))

},[])

 const handallerclick=(article)=>{
     console.log(article) 
     setDataSets(article);
    let person = parseInt(article.id);

 }

 let { url } = useRouteMatch();
 let { id } = useParams();


  return (
    <Grid item xs={12} md={8}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider />

<div className="container">
{articleValue.map((a)=>{return <Card className="mt-3 shadow" key={a.id}>
  <Image style={cardImages} src={a.images} alt="images"></Image>
  <Link className="p-3" to={`${url}/${a.id}`} onClick={ ()=> handallerclick(a) } >{a.title}</Link>
      <p className="p-1 ">{a.publishedAt}</p>
  
  </Card>})}
 
  </div>
 

    </Grid>
  );
}

Main.propTypes = {
  posts: PropTypes.array,
  title: PropTypes.string,
};


{
  /** {posts.map((post) => (
        <Markdown className={classes.markdown} key={post.substring(0, 40)}>
          {post}
        </Markdown>
      ))} */
}