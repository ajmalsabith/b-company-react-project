import React, { useState } from 'react'
import './otp.css'
import toast from "react-hot-toast";
import { useNavigate } from 'react-router-dom';
import axios from "axios";



 function Otp() {

    const navigate= useNavigate()
    const [state, setState] = useState({
        otp:Number
    })

const submit=(e)=>{
   const otpnum= state.otp
    if(!otpnum){
        return toast.error('please fill otp')
    }

    axios.post('http://localhost:5000/otpverify',otpnum).then((res)=>{

         toast.success(res.data.message)
         navigate('/home')
         
    }).catch((err)=>{
      toast.error(err.response.data.message)
    })
}

const handlechange=(e)=>{
   const {value,name} = e.target
   console.log(value);
   setState({...state,[name]:value})
}

const sty={color:'dark',fontwaight:'bold'}

  return (
    <div>
    <div className="container">
    <div className="formborder">
     <h1 style={sty}>Otp</h1>
     <form onSubmit={submit}>
      
        <input
          type="number"
          name="otp"
          placeholder="enter your otp"
          onChange={handlechange}

        />
        <button className="btn btn-success">submit</button>
        </form>
    </div>
  </div>
    </div>
  )
}



export default Otp