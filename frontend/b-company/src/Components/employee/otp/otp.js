import React from 'react'
import './otp.css'
 function Otp() {


const submit=(e)=>{

}

const handlechange=(e)=>{

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