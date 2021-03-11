import React from 'react';

const CreateNewGallery = () => {
    return (
        <div>
            <h1>Add your Gallary images</h1>
            <div className="row container ">
                <div className="col-md-6 m-auto">
                <form className="text-left">
                <label  for="title">Enter title</label>
                <input className="form-control" type="text" id="title" placeholder="Enter title of images"></input><br></br>
                <input type="file" formEncType="image/*"></input><br></br><br></br>
                <input type="submit" className="btn btn-success" formEncType="image/*"></input>

            </form>
                </div>
            </div>
            
        </div>
    );
};

export default CreateNewGallery;