import "./App.css";
import {BrowserRouter,Routes,Route } from "react-router-dom";
import CompanyLogin from "./Components/company/companyLogin/companyLogin";

function App() {
  return (
    <div>
    <BrowserRouter>
       <Routes>
       <Route path="/login" Component={CompanyLogin} />
       <Route path="" Component={CompanyLogin} />
       </Routes>   
       </BrowserRouter> 
    </div>
  );
}

export default App;
