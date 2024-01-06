import React, { useState } from 'react'
import "./projectManage.css";
import AdminNavbar from '../adminNav/adminNav';
import { set } from 'mongoose';

 function ProjectManage() {

    const [state,setState] =useState({

        pname:'',
        pcon:'',
        psdate:'',
        pcname:'',
        pdate:'',


    })
    function handlechange(e){
        const {name,value} = e.target

         setState({...state,[name]:value})
    }
    function submit(){
        
    }
  return (
    <div>
    <AdminNavbar />

    <div className='firstclass'>

      <div className='j-class'>
      <form onSubmit={submit}>
          <label > projectName</label>
          <input type='text' onChange={handlechange} className='input-p' name='p-name' />
          <label >content</label>
          <input type='text' className='input-p' onChange={handlechange} name='pcon' />
          <label > startdate</label>
          <input type='date' className='input-p' onChange={handlechange} name='psdate' />
          <label > endDate</label>
          <input type='date' className='input-p' onChange={handlechange} name='pedate' />
          <label > clientName</label>
          <input type='text' className='input-p' onChange={handlechange} name='pcname' />
          <button className='btn btn-info mt-2'>ADD PROJECT</button>
          </form>
      </div>
       
    </div>
    projectManage
    </div>
  )
}


export default ProjectManage
