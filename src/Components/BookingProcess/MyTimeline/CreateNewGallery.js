import React from 'react';
import {useState,useEffect} from 'react';
import APIService from '../../APIClients/APIService';

const CreateNewGallery = () => {
    const [Gallery_name, setTitle] = useState('');
    const [Gallery_image, setImageLink] = useState('');
    const [GalleryList, setGalleryList] = useState([]);
    const uri=`http://127.0.0.1:8000/api/apis/gallery/`;


    const HandleSubmit=()=>{
        var min = 1;

        var max = 100000000;
        var rand =  min + (Math.random()*(max-min));
        console.log(Math.ceil(rand));
        var id=Math.ceil(rand);
              APIService.Todo({id,Gallery_name,Gallery_image},`http://127.0.0.1:8000/api/apis/gallery/`).catch(err=>console.log(err));
    }

    

   console.log(GalleryList)
    

    return (
        <div>
            <h1>Add your Gallary images</h1>
            <div className="row container ">
                <div className="col-md-6 m-auto">
                <form className="text-left" method="POST" onSubmit={HandleSubmit}>
                <label  for="title">Enter title</label>
                <input 
                className="form-control"
                 type="text" id="title"
                  placeholder="Enter title of images"
                  name="Gallery_name"
                  onChange={(e)=>setTitle(e.target.value)}
                  value={Gallery_name}
                  ></input><br></br>
                <input type="text"
                 className="form-control" 
                 placeholder="Enter Image Link"
                 name="Gallery_image"
                 onChange={(e)=>setImageLink(e.target.value)}
                  value={Gallery_image} ></input><br></br><br></br>

                <input type="submit" className="btn btn-success"></input>

            </form>
                </div>
            </div>
            
        </div>
    );
};

export default CreateNewGallery;