import React,{useState} from "react";
import toast from "react-hot-toast";
import "./employeelogin.css";
import { useNavigate } from 'react-router-dom';
import axios from "axios";


function Employeelogin() {

  const navigate= useNavigate()
  const [state, setState] = useState({
    name: "",
    dob: Date,
    desigination: "",
    about: "",
    phone: Number,
    place: "",
    email:''
  });
  const sty={color:'dark',fontwaight:'bold'}
 function submit(e){
    e.preventDefault()
    const {name,dob,desigination,about,phone,place,email} = state
     console.log(desigination+'==is desigi');
    if(!name || !dob|| !desigination||!about|| !phone||!place || !email){
      toast.error('please fill all fields..!')
      return
    }

    const emplyee={
      name:name,
      place:place,
      desigination:desigination,
      dob:dob,
      phone:phone,
      about:about,
      email:email
    }

    axios.post('http://localhost:5000/employeregister',emplyee).then((res)=>{

         toast.success(res.data.message)
         toast.success(res.data.otp)
         navigate('/otp')
         
    }).catch((err)=>{
      toast.error(err.response.data.message)
    })



  }

 const handlechange=(e)=>{

  const {name,value} = e.target
  console.log(name+'==='+value);
  setState({...state,[name]:value})
  
  }
  

  return (
    <div>
      <div className="container">
        <div className="formborder">
          <h1 style={sty}>Fill Form</h1>
          <form onSubmit={submit}>
            <input
              type="text"
              name="name"
              placeholder="enter your name"
              onChange={handlechange}
            />
            <input
              type="text"
              name="place"
              placeholder="enter your place"
              onChange={handlechange}
            />
            <div>
            <label className="mt-1" for="dob">Your date of birth</label>
            <input
            id="dob"
              type="date"
              name="dob"
              placeholder="enter your dob"
              onChange={handlechange}
            />
            </div>
            <label for="desigin">Your desigination</label>
            <div>
            <select className="mt-1" id="desigin" name="desigination" onChange={handlechange} >
              <option value="HR">HR</option>
              <option value="ProjectManager">Project Manager</option>
              <option value="CTO">CTO</option>
              <option value="SoftwareEngineer">Software Engineer</option>
              <option value="WebDeveloper">Web Developer</option>
              <option value="BusinessAnalyst">Business Analyst</option>
            </select>
            </div><br/>
            <input
              type="text"
              name="about"
              placeholder="enter about you"
              onChange={handlechange}
            />
            <input
              type="number"
              name="phone"
              placeholder="enter your phone number"
              onChange={handlechange}
            />
            <input
            type="email"
            name="email"
            placeholder="enter your email"
            onChange={handlechange}
          />
            <button className="btn btn-success">Next</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Employeelogin;
