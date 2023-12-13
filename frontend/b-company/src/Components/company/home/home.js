import React from "react";
import Navbar from "../navbar/navbar";
import "./home.css";
import { AiOutlineCodepen, AiFillTag } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { IoIosPhonePortrait } from "react-icons/io";




function Home() {
  return (
    <div>
      <Navbar />

      <div className="container">
      <div className="row">
        <div className="col-lg-7 icondiv">
          <div className="row">
            <div className="styf1div col-lg-6 d-flex align-items-center justify-content-center">
              <div>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3891/3891613.png"
                  alt="Company Logo"
                  width="200"
                  height="200"
                  className="d-inline-block align-top mr-2"
                />
                <h1>
                  <AiOutlineCodepen className="AiOutlineCodepen" /> b-company
                </h1>
                <p>
                  <AiFillTag className="AiFillTag" />
                  b-company Software pvt ltd
                </p>
                <p>
                  <FaMapMarkerAlt className="FaMapMarkerAlt" />
                  calicut, kerala, syberpark fourth floor
                </p>
                <div className="stcard1">
                <p>
                  <MdEmail className="MdEmail" /> b-company121@gmail.com
                </p>
              </div>
              <div className="stcard1 mt-2">
                <p>
                  <IoIosPhonePortrait className="MdEmail" /> 1002 4005 7770
                </p>
              </div>
              </div>
              
            </div>
            <div className="col-lg-6 mt-1">
               <div className="stcmcard1">
                    <FcAbout className="FcAbout"/> 
                    <h4>Employees 23</h4>
               </div>
               <div className="stcmcard1">
                    <FcAbout className="FcAbout"/> 
                    <h4>Projects 7</h4>
               </div>
               <div className="stcmcard1">
                    <FcAbout className="FcAbout"/> 
                    <h4>Clients 4</h4>
               </div>
              
            </div>
          </div>
        </div>
        <div className="col-lg-4 icondiv">extra full details</div>
      </div>
    </div>
    </div>
  );
}

export default Home;
