import React,{useState} from "react";
import "./companyLogin.css";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from 'react-router-dom';

function CompanyLogin() {

  const navigate= useNavigate()


  const [state, setState] = useState({
    email: '',
    password: ''
  });
 const sty={color:'dark',fontwaight:'bold'}
 const submit=(e)=>{
    e.preventDefault();
    const {email,password}=state
    if(!email||!password){
      console.log('is here');
      toast.error('please fill email and password')
      return
    }

   const userdata= {
    email:email,
    password:password
   }

    axios.post('http://localhost:5000/companylogin',userdata).then((res)=>{

         toast.success(res.data.message)
         navigate('/register')
         
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
    <div >
      

      <div className="container">
         
        <div className="formborder">
         <h1 style={sty}>CompanyLogin</h1>
         <form onSubmit={submit}>
            <input
              type="email"
              name="email"
              placeholder="enter company email"
              onChange={handlechange}
            />
        
          
            <input
              type="password"
              name="password"
              placeholder="enter company password"
              onChange={handlechange}

            />
            <button className="btn btn-success">Login</button>
            </form>
        </div>
      </div>
    </div>
  );
}

export default CompanyLogin
