import React from 'react';
import { useParams } from 'react-router';
import {useEffect,useState} from 'react';
import {Image} from 'react-bootstrap';
import Like from './Like';
import CommentsSection from './CommentsSection';
import StickyFooter from '../Footer/StickyFooter';

const SingleBlogPages = () => {

    const Imagestyle={
        height:'650px',
    }
    const title={
        fontFamily: " New Tegomin, serif",
    }
    const description={
        fontFamily: "Roboto Mono, monospace",
          }
    const [articles, setArticles] = useState([]);
    //useEffect(()=>{fetch })
    let {id} = useParams();
    
    const uri="http://127.0.0.1:8000/api/apis/articles/"+id+"/";
  
    useEffect(()=>{fetch(uri,{
        "method": "GET",
        headers:{
            'Content-Type':'application/json',
            'Authorization':'Token d03ef30f3aa3b550c60d69d1134a7b38d10526e2'
        }

    }).then(res=>res.json())
    .then(res=>setArticles(res))
    .catch(err=>console.log(err))

},[])
  
    //console.log(uri);
   // console.log(articles);

    return (
        <div>
         <Image className="container p-2 shadow rounded" style={Imagestyle} src={articles.images}  alt="images"></Image>
         <p className="container text-left mt-4 text-muted">Posted At:{articles.createdAt}</p>
       
       <h4 style={title} className="mt-3">{articles.title}</h4>
       
       <p  style={description} className="container mt-5">{articles.content}</p>
        
        <Like></Like>
        <CommentsSection></CommentsSection>
        <StickyFooter></StickyFooter>
        </div>
    );
};

export default SingleBlogPages;