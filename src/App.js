
import './App.css';
import List from './components/List.js'
import { useEffect, useState } from 'react';
import axios from 'axios';



function App() {
 const[task,addtask]=useState([])
  const[txt,settxt]=useState("")
  

useEffect(()=>{
  axios.get(process.env.REACT_APP_GET).then(res=>{
    addtask(res.data)
  }).catch(err =>{console.log(err)})
})

  
const addtxt=(e)=>{
   e.preventDefault()

  axios.post (process.env.REACT_APP_POST,{
   Task:txt,
   complected:false
 }).then(res=>{ 
  settxt("") 
 }).catch(err=> console.log(err))
 
}

  
      return(
        <div id="container">
        <form onSubmit={addtxt}>
        <input type="text" placeholder="Enter The Task..." value={txt} onChange={(e)=>{ settxt(e.target.value)}}/>
        <button id="add"><i className="fa-solid fa-plus"></i></button>
        </form>
     
      
        <div>
        <ul>
        {task.map((task,id)=>{
    return( 
    <List key={id} obj={task}  />
      )
   }) }
   </ul>
  
        </div>
        </div>
      ) 
  }

  
export default App;