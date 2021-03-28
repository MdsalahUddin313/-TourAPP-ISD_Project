import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import StripeCheckout from "react-stripe-checkout";
import {useParams} from 'react-router-dom';
import {FormControl,Col,Button,Row,Image,Container,Form,Table,Card} from 'react-bootstrap';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe("pk_test_51IUZstGody2BFmiBBMnT8uyrxCuSfRRpbAgYRbMMO5dFxLI8AHEEHFEeCbLwSo2RAshlQjTF5A3pqNl48j3mWhhX00ViZTdBzh");
const TestKey="pk_test_51IUZstGody2BFmiBBMnT8uyrxCuSfRRpbAgYRbMMO5dFxLI8AHEEHFEeCbLwSo2RAshlQjTF5A3pqNl48j3mWhhX00ViZTdBzh";
const Checkouts = () => {

    const [product, setProduct] = useState({
        name:"Booking Process",
        price:10,
        productBy:"TourApp"

   });

   const makePayment =token=>{
       const body ={
           token,
           product
        }
        const headers={
            "Content-type":"application/json"

        }
        return fetch(`http://localhost:4000/payment`,{
            method:'POST',
            headers:{},
            body:JSON.stringify(body)
        }).then(res=>{
            console.log("RESPONSE::",res)
            const {status} =res;
            console.log("STATUS",status)
        })
        .catch(err=>console.log(err))
   }
    

   
  const [hotelsValues, setHotelsValues] = useState([]);

  let {id} =useParams();
  
  //const {CartHandalling}=props.CartHandalling;
  
  const uri="http://127.0.0.1:8000/api/apis/hotels/"+id+"/";
  
  useEffect(()=>{fetch(uri,{
      "method": "GET",
      headers:{
          'Content-Type':'application/json',
          'Authorization':'Token d03ef30f3aa3b550c60d69d1134a7b38d10526e2'
      }

  }).then(res=>res.json())
  .then(res=>setHotelsValues(res))
  .catch(err=>console.log(err))

},[]);
console.log(hotelsValues);


    return (
        <div>
            <h1 className="m-1 pt-2 pb-1">Tour <span className="text-success"> App </span></h1>
            <p>--------Make Your Tour Comfortable--------</p>
            <Row>
                <Col xm={4} xl={4} xs={6} className="bg-light border border-info rounded shadow-lg p-5 m-auto">
               <h5 className="mb-2 pb-2 text-info">Payment Info Card</h5>
                <Image className="w-100 h-50 image-fluid rounded shadow-sm mb-2" src={hotelsValues.hotel_images} alt="asdasd"></Image><br></br>
            <hr></hr>
            <h4>{hotelsValues.hotel_name}</h4>
            <StripeCheckout
            stripeKey="pk_test_51IUZstGody2BFmiBBMnT8uyrxCuSfRRpbAgYRbMMO5dFxLI8AHEEHFEeCbLwSo2RAshlQjTF5A3pqNl48j3mWhhX00ViZTdBzh"
            token={makePayment}
            name={hotelsValues.hotel_name}
            amount={hotelsValues.hotels_roomprice*100}

            >
                <button className="btn btn-danger text-white">Book Hotels in:: {hotelsValues.hotels_roomprice} tk</button>
            </StripeCheckout>
                </Col>
            </Row>
            
        </div>
    );
};

export default Checkouts;