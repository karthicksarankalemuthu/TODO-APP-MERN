import { useState } from 'react';
import axios from 'axios';
import '../App.css';



function Popup(props){
  
    const[task,setTask]=useState(props.Task);

     

    const updateTask=() => {
        
        axios.put(process.env.REACT_APP_PUT+props.id ,{
           _id:props.id,
           Task:task,
           complected:props.com,
         }).then(res=>{
            props.re()
         }).catch(err=> console.log(err))
        
      
    }


    return(
        <div className = 'popup'>
        <div className = 'popup-content'>
            <input type = 'text'  placeholder = 'Update Task . . .' value = {task} onChange = {event => setTask(event.target.value)}/>
            <button onClick = {() => updateTask()}>Update</button>
        </div>
        
    </div>
    
    )
}
export default Popup;