import "./App.css";
import {BrowserRouter,Routes,Route } from "react-router-dom";
import CompanyLogin from "./Components/company/companyLogin/companyLogin";
import Employeelogin from "./Components/employee/employeelogin/employeelogin";
import  { Toaster } from 'react-hot-toast'
import Otp from "./Components/employee/otp/otp";
import Home from "./Components/company/home/home";
import AdminLogin from "./Components/admin/login/login";
import AdiminHome from "./Components/admin/home/home";
import Empmanage from "./Components/admin/employeemanage/empmanage";


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
       <Route path="/register" Component={Employeelogin} />
       <Route path="/otp" Component={Otp} />
       <Route path="/home" Component={Home} />
       <Route path="/adminlogin" Component={AdminLogin} />
       <Route path="/adminhome" Component={AdiminHome} />
       <Route path="/adminUserManage" Component={Empmanage} />
       <Route path="*" Component={CompanyLogin} />

       </Routes>   
       </BrowserRouter> 
    </div>
  );
}

export default App;
