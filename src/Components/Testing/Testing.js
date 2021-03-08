import React from 'react';
import {useEffect,useState,useHistory,useCookies} from 'react';
import Header_two from '../Header/Header_two';
import CardOne_simple from '../Property_holders/CardOne_simple';
import Card_two from '../Property_holders/Card_two';
import Filter from '../Property_holders/Filter';
import HotelList from '../Property_holders/Hotels/HotelList';
import SingleHotelPage from '../Property_holders/Hotels/SingleHotelPage';
import SearchFilters from '../Property_holders/SearchFilters';
import Singlebus from '../Property_holders/Transpots/Singlebus';
import StepsIndex from '../StepsForTourplan/StepsIndex';
import Gridimages from '../SurfaceInputs/Gridimages';
import DestinationForm from '../SurfaceInputs/DestinationForm';
import Steps from '../SurfaceInputs/Steps';
import APIService from '../APIClients/APIService';





const Testing = () => {
    //const [username, setUsername] = useState('');
   // const [password, setPassword] = useState('');
    // const [token, setToken] = useCookies(['mytoken']);
    // const [isLogin, setLogin] = useState(true);
    // let history = useHistory();

    const [valueState, setvalueState] = useState([]);
    const [resultData, setresultData] = useState([]);
    const [rData, setrData] = useState([]);




    const Userurls="http://127.0.0.1:8000/api/apis/authors/";
    var id=0,i=0;


    // const loginBtn = () => {
    //     APIService.LoginUser({username, password})
    //     .then(resp => setToken('mytoken',resp.token))
    //     .catch(error => console.log(error))
    
    // }
    // useEffect(() => {
    //     if(token['mytoken']) {
    //         history.push('/articles')
    //     }
    // }, [token])
    // function arrayData(data){

    //     var myObject=JSON.parse(data);
    //     console.log(myObject)
    //     for(var i=0;i<myObject.results.length;i++){
    //         var result=myObject.results[i];
    //         console.log(result.firstname);

    //     }
    // }



   


    // const RegisterBtn = () => {
    //     APIService.RegisterUser({username, password})
    //     .then(() =>  loginBtn())
    //     .catch(error =>console.log(error))

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
            <h1>1</h1>



            
           
        </div>
    );
};

export default Testing;


/*
<CardOne_simple></CardOne_simple>
           <h1>2</h1>
           <Card_two></Card_two>
           <Gridimages></Gridimages>
           <DestinationForm></DestinationForm>
           <Header_two></Header_two>
           <Filter></Filter>
           <SearchFilters></SearchFilters>
           <HotelList></HotelList>
           <SingleHotelPage></SingleHotelPage>
           <Singlebus></Singlebus>           
           <h1>Plan your tour</h1>
           <Steps></Steps>
           <StepsIndex></StepsIndex>

*/