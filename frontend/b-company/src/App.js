import "./App.css";
import {BrowserRouter,Routes,Route } from "react-router-dom";
import CompanyLogin from "./Components/company/companyLogin/companyLogin";
import employeelogin from "./Components/employee/employeelogin/employeelogin";
import  { Toaster } from 'react-hot-toast'


function App() {
    
  return (
    <div>
    <Toaster
    position="top-center"
    reverseOrder={false}
  />
  
    
    <BrowserRouter>
       <Routes>
       
       <Route path="" Component={CompanyLogin} />
       <Route path="/login" Component={CompanyLogin} />
       <Route path="/register" Component={employeelogin} />
       <Route path="*" Component={CompanyLogin} />

       </Routes>   
       </BrowserRouter> 
    </div>
  );
}

export default App;
