import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import AdminNavbar from "../adminNav/adminNav";

function ProjectList() {
  const [projectdata, setProject] = useState([]);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    try {
      const result = await axios.get(
        "http://localhost:5000/admin/project-data"
      );
      if (result) {
        setProject(result.data.projectdata);
      } else {
        toast.error(result.response.data.message);
      }
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div >
      <AdminNavbar />

      <div className="container">
        <button className="m-2 btn btn-info"> <a className="atag"  href="/adminProjectadd">Add New Project</a></button>
        <table className="mt-2 table table-stripped table-bordered">
          <thead className="table-dark">
            <tr>
              <th>project-Name</th>
              <th>clientName</th>
              <th>project-content</th>
              <th>startDate</th>
              <th>endDate</th>
              <th>status</th>
            </tr>
          </thead>
          <tbody>
          {projectdata.map((value,index)=>{
            return (
                <tr key={index}>
                   <td>{value.pname}</td>
                   <td>{value.pcname}</td>
                   <td>{value.pcon}</td>
                   <td>{value.psdate.substring(0,10)}</td>
                   <td>{value.pedate.substring(0,10)}</td>
                   <td>{value.status}</td>
                </tr>
            )
          })}
           
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProjectList;
