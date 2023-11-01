import React from "react";
import "./companyLogin.css";

function CompanyLogin() {
  const sty={color:'dark',fontwaight:'bold'}
  function submit(){
    console.log('value');
  }

  return (
    <div >
      

      <div className="container">
         
        <div className="formborder">
         <h1 style={sty}>CompanyLogin</h1>
         <form >
            <input
              type="email"
              name="companyemail"
              placeholder="enter company email"
            />
        
          
            <input
              type="password"
              name="password"
              placeholder="enter company password"
            />
            <button onClick={()=>submit()} className="btn btn-success">Login</button>
            </form>
        </div>
      </div>
    </div>
  );
}

export default CompanyLogin;
