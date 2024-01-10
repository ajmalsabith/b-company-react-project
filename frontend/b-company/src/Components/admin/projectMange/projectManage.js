import React, { useState } from 'react'
import "./projectManage.css";
import AdminNavbar from '../adminNav/adminNav';
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from 'react-router-dom';


 function ProjectManage() {
  const navigate= useNavigate()

    const [state,setState] =useState({

        pname:'',
        pcon:'',
        psdate:Date,
        pcname:'',
        pedate:Date,


    })
    function handlechange(e){
        const {name,value} = e.target
        console.log(name,value);
         setState({...state,[name]:value})
    }
    function submit(e){
       e.preventDefault();
        const {pname,pcon,psdate,pcname,pedate} = state
        console.log(pname,psdate,pcname,pcon,pedate)
        if(!pname|| !pcon ||!psdate||!pcname||!pedate){
          return toast.error('please fill the form')
        }

        axios.post('http://localhost:5000/admin/addProject',state).then((res)=>{
          toast.success('project adding success')
          navigate('/projectList')

        }).catch((err)=>{
        console.log(err.response.data.message);
        toast.error(err.response.data.message)
        })
    }
  return (
    <div>
    <AdminNavbar />

    <div className='firstclass'>

      <div className='j-class'>
      <form onSubmit={submit}>
          <label > projectName</label>
          <input type='text' onChange={handlechange} className='input-p' name='pname' />
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
