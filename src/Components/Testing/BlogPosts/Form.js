

import React, {useState, useEffect} from 'react'
import APIService from '../../APIClients/APIService';
import {useCookies} from 'react-cookie';

function Form(props) {
    const [title, setTitle] = useState('')
    const [subcategory, setSubcategory] = useState('')
    const [Metatitle, setMetaTitle] = useState("null")
    const [Category, setCategory] = useState("null")
    const [CreatedAt, setCreatedAt] = useState("null")
    const [UpdatedAt, setUpdatedAt] = useState("null")
    const [PublishedAt, setPublishedAt] = useState("null")
    const [Content, setContent] = useState("null")
    

    const [token] = useCookies(['mytoken'])

    useEffect(() => {
        setTitle(props.article.title)
        setSubcategory(props.article.subcategory)

    }, [props.article])


    //Update
    const updateArticle = () => {
        APIService.UpdateArticle(props.article.id, {title, subcategory}, token['mytoken'])
        .then(resp => props.updatedInformation(resp))


    }

    //Insert
    const insertArticle = () => {
        APIService.InsertArticle({title, subcategory}, token['mytoken'])
        .then(resp => props.insertedInformation(resp))
        .then(resp=> console.log(resp))
    }

    return (
        <div>

           {props.article ? (

                <div className = "mb-3">
                <label htmlFor = "Title" className = "form-label">Title</label>
                <input type="text" className = "form-control" id="Title" placeholder = "Please Enter The Title"
                value = {title} onChange = {e => setTitle(e.target.value)}
                
                
                />

                <label htmlFor = "subcategory" className = "form-label">Description</label>

                <textarea className = "form-control" id="subcategory" rows="5"
                value = {subcategory} onChange = {e => setSubcategory(e.target.value)}
                ></textarea>

                <br/>

                {
                    props.article.id ?   <button onClick = {updateArticle} className = "btn btn-success">Update Article</button>
                    :  <button onClick = {insertArticle} className = "btn btn-success">Insert Article</button>


                }

               
                </div>


           ) : null}
            
        </div>
    )
}

export default Form
