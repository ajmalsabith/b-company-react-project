import React from 'react';
import './nav.css';


function AdminNavbar() {
  return (
    <div>
      <nav className="navbar navbarrr navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/adminhome">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3891/3891613.png"
              alt="Company Logo"
              width="30"
              height="30"
              className="d-inline-block align-top mr-2"
            />
            B-Company
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">X</span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link navitems active" href="/adminhome">
              Dashboard
            </a>
            <a className="nav-link navitems"  href="/projectList">
              projectsMange
            </a>
            <a className="nav-link navitems" href="/adminUserManage">
              EmployeeManage
            </a>
            <a className="nav-link navitems" href="/leave">
              LeaveApp
            </a>
          </div>
        
          </div>
        </div>
      </nav>
    </div>
  );
}

export default AdminNavbar;
