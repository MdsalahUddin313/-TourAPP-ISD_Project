import React from 'react';
import {Form,Button,Table} from 'react-bootstrap';
import {useState,useEffect} from 'react';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import APIClients from '../APIClients/APIService';
import APIService from '../APIClients/APIService';
const ToDoindex = () => {
   const [todo_title_name, setTitle] = useState('');
   const [todo_titleList, setTitleList] = useState([]);
   const [done_titleList, setDoneTitleList] = useState([]);
   const [done_title_name, setTitleName] = useState('');

   

   const styleFocused={
       cursor:"pointer",
   }
   const uri="http://127.0.0.1:8000/api/apis/todo/";
  
   useEffect(()=>{fetch(uri,{
       "method": "GET",
       headers:{
           'Content-Type':'application/json',
           'Authorization':'Token d03ef30f3aa3b550c60d69d1134a7b38d10526e2'
       }
 
   }).then(res=>res.json())
   .then(res=>setTitleList(res))
   .catch(err=>console.log(err))
 
 },[])
 
 console.log(todo_titleList)

 const handleClick=(event)=>{
     const todoUri="http://127.0.0.1:8000/api/apis/todo";
     APIService.DeleteTodo(event.id,todoUri).catch(err=>console.log(err));
 }

    const submitHandaller= () => {
        var min = 1;
        var max = 100000000;
        var rand =  min + (Math.random()*(max-min));
        console.log(Math.ceil(rand));
        var id=Math.ceil(rand);
        const InsertUri=`http://127.0.0.1:8000/api/apis/todo/`;

        APIService.Todo({id,todo_title_name},InsertUri).catch(err=>console.log(err))
    }


    
    const doneUri=`http://127.0.0.1:8000/api/apis/done/`;
        useEffect(()=>{fetch(doneUri,{
            "method": "GET",
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Token d03ef30f3aa3b550c60d69d1134a7b38d10526e2'
            }
      
        }).then(res=>res.json())
        .then(res=>setDoneTitleList(res))
        .catch(err=>console.log(err))
      
      },[])
      console.log(done_titleList);

     
      const handleClickDoneList =(e)=>{
          console.log(e.id);
        const DoneUri=`http://127.0.0.1:8000/api/apis/done`;
        APIService.DeleteTodo(e.id,DoneUri).catch(err=>console.log(err));
       // APIService.DeleteTodo(e.id,DoneUri).catch(error=>console.log(error));
      }
      
      const submitDoneHandaller= () => {
        var min = 1;
        var max = 100000000;
        var rand =  min + (Math.random()*(max-min));
        console.log(Math.ceil(rand));
        var id=Math.ceil(rand);
        const InserDonetUri=`http://127.0.0.1:8000/api/apis/done/`;

        APIService.Todo({id,done_title_name},InserDonetUri).catch(err=>console.log(err))
    }

   

    console.log({todo_title_name});
    return (
        <div>
            <div className="container">
                
                <h5 className="mt-5 p-3" >Tour Management List</h5>
                <h6 className="p-3 text-success">Before Start your journey you can list what you need to do in a tourist spot.It will enhance your excitement and you will get a satisfiction.After doing work you can delete your todo list and add it into Done list.Hence you get a proper tour report. </h6>
                <div className="row">
                    <div className="col-md-6">
                    <h6 className="text-left  pt-4 text-info">To Do in tour.</h6>
                         <form method="POST" onSubmit={submitHandaller}>
                         <input type="text" name="todo_title_name" placeholder="Add To Do List" className="form-control" onChange={(e)=>setTitle(e.target.value)}></input>
                         <Button  type="submit"  className="btn btn-success">Submit</Button>
                         </form>
                         <Table className="pt-5 mt-5" striped bordered hover>
                         
                            
                                
                                     <thead>
                                     <tr>
                                     <th className="text-danger">ToDO Titles Lists</th>
                                       
                                       

                                       </tr>
                                     </thead>
                                    
                                   {todo_titleList.map((h)=>{return <div>
                                    <tbody>
                                    <tr>
                                      <td>{h.todo_title_name}</td>                                      
                                       <td ><DeleteForeverIcon onClick={()=>handleClick(h)} style={styleFocused} color="secondary"></DeleteForeverIcon></td>
                                    </tr>
                                    </tbody>
                                   </div>})}
                                
                         </Table>
                         

                    </div>

                    <div className="col-md-6">
                        <h6 className="text-left pt-4 text-info">Done in tour.</h6>
                         <form method="POST" onSubmit={submitDoneHandaller}>
                         <input type="text" name="done_title_name" placeholder="Add Done List" className="form-control" onChange={(e)=>setTitleName(e.target.value)}></input>
                         <Button type="submit" className="btn btn-success">Submit</Button>
                         </form>
                         <Table className="pt-5 mt-5" striped bordered hover>
                         
                            
                                
                                     <thead>
                                     <tr>
                                     <th className="text-success">Done Titles Lists</th>
                                       
                                       

                                       </tr>
                                     </thead>
                                    
                                   {done_titleList.map((a)=>{return <div>
                                    <tbody>
                                    <tr>
                                      <td>{a.done_title_name}</td>                                      
                                       <td ><DeleteForeverIcon onClick={()=>handleClickDoneList(a)} style={styleFocused} color="secondary"></DeleteForeverIcon></td>
                                    </tr>
                                    </tbody>
                                   </div>})}
                                
                         </Table>
                    </div>



                </div>

            </div>
            
        </div>
    );
};

export default ToDoindex;