import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'

const Addtodos = () => {
  const [formvalue,setformvalue] = useState({ 
    todo:""

   })
   const captureValue = (evt) =>{
    console.log(evt.target)
    const name = evt.target.name;
    const value = evt.target.value;
    setformvalue({...formvalue,[name]:value})
   }

   const AddTodos = async (e)=>{
    e.preventDefault();
    await axios.post('http://127.0.0.1:8000/api/brief/',formvalue)
    setformvalue ({
      todo :""
    })
    console.log('ok')
   }
   
  return (
    <div>Addtodos

      <form>
        <input type="text" name='todo' value={formvalue.todo} onChange={captureValue} />
        <input type="submit" onClick={AddTodos}  />
      </form>
    </div>
  )
}

export default Addtodos