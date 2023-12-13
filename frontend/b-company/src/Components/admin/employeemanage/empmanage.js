import React, { useEffect, useState } from 'react'
import './empmanage.css'
import AdminNavbar from '../adminNav/adminNav'
import axios from "axios";
import toast from "react-hot-toast";
import { MdBlock,MdDelete, } from "react-icons/md";
import { CgUnblock } from "react-icons/cg";


// import { useNavigate } from 'react-router-dom';

 function Empmanage() {
    const [empdata,setUser]= useState([])
  useEffect(()=>{
    fetchdata()
  },[])
    
  const fetchdata= async()=>{
    try {
        
        const response= await axios.get('http://localhost:5000/admin/emp-data')
        if(response){
            setUser(response.data.userdata)
        }else{
            toast.error(response.response.data.message)
        }
           

    } catch (error) {
        toast.error(error)
    }
 
    
}


 const actions= (id)=>{
     axios.post('http://localhost:5000/admin/emp-action',{id:id}).then((res)=>{
        toast.success(res.data.message)
        fetchdata()
    }).catch((err)=>{
        toast.error(err.response.data.message)
    })
 }

 
 const deleteEmp= (id)=>{
    axios.post('http://localhost:5000/admin/emp-delete',{id:id}).then((res)=>{
       toast.success(res.data.message)
       fetchdata()
   }).catch((err)=>{
       toast.error(err.response.data.message)
   })
}

  return (
    <div>
    <AdminNavbar />
     <div className='container cont mt-2'>
     <table className='table table-stripped table-bordered '>
       <thead className='table-dark' >
           <tr>
              <th>name</th>
              <th>place</th>
              <th>desigination</th>
              <th>email</th>
              <th>about</th>
              <th>dob</th>
              <th>mon-leave-left</th>
              <th>actions</th>
           </tr>
       </thead>
       <tbody >
       {empdata.map((item,index)=>{  
        return (
          <tr key={index}>
             <td>{item.name}</td>
             <td>{item.place}</td>
             <td>{item.desigination}</td>
             <td>{item.email}</td>
             <td>{item.about}</td>
             <td>{item.dob.substring(0,10)}</td>
             <td>{item.leaveMonth}</td>
             <td> <MdDelete onClick={()=>deleteEmp(item._id)} className='delete m-2' />   {item.isblock===true ? <CgUnblock className='unblock m-2' onClick={()=>actions(item._id)} /> : <MdBlock className="block m-2" onClick={()=>actions(item._id)}/> } </td> 
          </tr>
        )
        })}
       </tbody>
     </table>
    </div>
    </div>
   
  )
}



export default Empmanage
