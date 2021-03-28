import React from 'react';
import {useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import './Wstyle.css';


const ClickHandaller=(event)=>{
    console.log(event.id);

}

const Wmain = () => {

    const [locations, setlocations] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/apis/locations/",{
            'method':'GET',
            headers:{
                'Content-Type':'application/json',
                'Authorization':`Token d03ef30f3aa3b550c60d69d1134a7b38d10526e2` 
     
            }
        }).then(res =>res.json())
        .then(res=>setlocations(res))    
        .catch(err=>console.log(err))
     }, [])

    return (
        <div className="container">
            <h1 className="mt-4 p-3 text_header text-info">Pick your Desired Location</h1>
           
            {locations.map((a)=>{return <div className="d-flex ">

                <Link onClick={()=>ClickHandaller(a)} to={`/whatTodo/${a.id}`}><button className="btn btn-primary m-2"><LocationOnIcon></LocationOnIcon>{a.Location_name}</button></Link>
            </div>})}

        </div>
    );
};

export default Wmain;