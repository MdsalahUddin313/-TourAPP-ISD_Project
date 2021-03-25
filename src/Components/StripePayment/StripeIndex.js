import React from 'react';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from './CheckoutForm';
import './style.css';

const STRIPE_PUBLISHABLE_KEY="pk_test_51IUZstGody2BFmiBBMnT8uyrxCuSfRRpbAgYRbMMO5dFxLI8AHEEHFEeCbLwSo2RAshlQjTF5A3pqNl48j3mWhhX00ViZTdBzh";
const stripePromise = loadStripe(STRIPE_PUBLISHABLE_KEY);
console.log(stripePromise);


const StripeIndex = () => {
    return (
        <div>
            <div className="w-50 p-5 mt-5 container ml-auto shadow">
        <img
          src="https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress"
          alt="laptop"
          style={{ width: "100%", height: "300px" }}
        />
        <div>
          
          <Elements stripe={stripePromise}>
            <CheckoutForm></CheckoutForm>
          </Elements>
          
        </div>
      </div>
        </div>
    );
};

export default StripeIndex;