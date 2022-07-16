import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';
import Popup from './popup';

function List(props){
 



  const[showpopup,setshowpopup]=useState(false);

  const popup=()=>{
      setshowpopup(!showpopup);
  }

    const deletelist=()=>{
 
        axios.delete(process.env.REACT_APP_DELETE+props.obj._id)
       .then(res=> {}
       ).catch(err=> console.log(err))
       
      }

      const taskstatus=() => {
        
        axios.put(process.env.REACT_APP_PUT+props.obj._id ,{
           _id:props.obj._id,
           Task:props.obj.Task,
           complected:!props.obj.complected,
         }).then(res=>{ 
         }).catch(err=> console.log(err))
        
    }


    return(
      <div  className={props.obj.complected ? "list complected" :"list notcomplected"}onClick={taskstatus}>
   <li>{props.obj.Task}</li>
   <button  id="editbtn"onClick={popup}><i className="fa-solid fa-pen-to-square"></i></button>
   <button id="deletebtn" onClick={deletelist}><i className="fa-solid fa-trash-can"></i></button>
   {showpopup ? <Popup re={popup} id={props.obj._id} Task={props.obj.Task} com={props.obj.complected}/> :"" }
   </div>
        )
    
        
}
  
export default List;