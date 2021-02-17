import React from 'react';
import {useEffect,useState} from 'react';
const Testing = () => {

    const [valueState, setvalueState] = useState([]);
    const [resultData, setresultData] = useState([]);
    const [rData, setrData] = useState([]);


    const Userurls="http://127.0.0.1:8000/api/apis/authors/";
    var id=0,i=0;

    // function arrayData(data){

    //     var myObject=JSON.parse(data);
    //     console.log(myObject)
    //     for(var i=0;i<myObject.results.length;i++){
    //         var result=myObject.results[i];
    //         console.log(result.firstname);

    //     }
    // }

    const arrayData=(length)=>{

     let alldata=['']
        for(var i=0;i<length;i++){
            alldata= [...alldata,valueState[i]];
            setrData(alldata);
                        
            console.log(rData);

        }
       
    }


   useEffect(()=>{
    fetch(Userurls,{
        'method':'GET',
        headers: {
          'Content-Type':'application/json',
          'Authorization':`Token a937dbb84f76aa10637923f459786bc2f32b2f83` 
        }
      }).then(res=>res.json()
      ).then(data=>setvalueState(data))
      .catch(err=>console.log(err))

   },[])
/*
{arrayData(valueState)}
            {console.log(resultData)}
            {resultData.map=(a)=><p>{a.firstname}</p>}
*/
    

    return (
        <div>
            <p>Hello tester</p>
         
            {console.log(valueState)}

            {valueState.map((a)=>{return <p>{a.firstname}</p>})}
         
           
           
           
           
        </div>
    );
};

export default Testing;