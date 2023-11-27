import React,{useState} from 'react'
import "./login.css";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from 'react-router-dom';

 function AdminLogin() {
  
    const navigate= useNavigate()


    const [state, setState] = useState({
      name: '',
      email: ''
    });
   const sty={color:'dark',fontwaight:'bold'}
   const submit=(e)=>{
      e.preventDefault();
      const {name,email}=state
      if(!email||!name){
        console.log('is here');
        toast.error('please fill email and password')
        return
      }
  
     const adminData= {
      email:email,
      name:name
     }
  
      axios.post('http://localhost:5000/admin/login',adminData).then((res)=>{
  
           toast.success(res.data.message)
           navigate('/adminhome')
           
      }).catch((err)=>{
        console.log(err.response.data.message);
        toast.error(err.response.data.message)
      })
  
  
    }
  
   const  handlechange=(e)=>{
      const { name, value } = e.target;
      console.log(value+'=='+name);
      setState({...state,[name]:value})
    }
  
    return (
      <div className='container'>
        
  
        <div className="alignitem">
           
          <div className="formbuilder">
           <h1 style={sty}>adminLogin</h1>
           <form onSubmit={submit}>
              <input
                type="text"
                name="name"
                placeholder="enter your name"
                onChange={handlechange}
              />
          
            
              <input
                type="email"
                name="email"
                placeholder="enter your email"
                onChange={handlechange}
  
              />
              <button className="btn btn-success">Login</button>
              </form>
          </div>
        </div>
      </div>
    );
}

export default AdminLogin