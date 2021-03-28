const cors = require ("cors");
const express = require("express");

//TODO: add a stripe key require(id:string):

const stripe =require("stripe")("pk_test_51IUZstGody2BFmiBBMnT8uyrxCuSfRRpbAgYRbMMO5dFxLI8AHEEHFEeCbLwSo2RAshlQjTF5A3pqNl48j3mWhhX00ViZTdBzh");
const { v4: uuidv4 } = require('uuid');
const app =express();


//middleware
app.use(express.json());
app.use(cors());

//routes
app.get("/",(req,res)=>{
    res.send("Payment Works");
});

app.post ("/payment",(req,res)=>{
 
    const {product ,token} =req.body;
    console.log("PRODUCT",product);
    console.log.log("PRICE" ,product.Price);
    const idempontencyKey =uuidv4()

    return stripe.customers.create({
        email:token.email,
        source:token.id
    }).then(customer=>{
          stripe.charges.create({
              amount:product.price*100,
              currency:'usd',
              customer:customer.id,
              receipt_email:token.email,
              description:`Booking Of product.name`,
              shipping:{
                  name: token.card.name,
                  address:{
                      country: token.card.address_country,
                  }
              }
            },{idempontencyKey}
            );
    }).then(result=>res.status(200).json(result))
    .catch(err=>console.log(err));

});


//listen

app.listen(4000,()=>console.log("LISTENING AT PORT 4000"));
