import React from 'react';
import './nav.css';


function AdminNavbar() {
  return (
    <div>
      <nav className="navbar navbarrr navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
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
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="/home">
              Dashboard
            </a>
            <a className="nav-link" href="/features">
              projectsMange
            </a>
            <a className="nav-link" href="/projects">
              EmployeeManage
            </a>
            <a className="nav-link" href="/leave">
              LeaveApp
            </a>
            <a className="nav-link ml-auto" href="/profile">
              Profile
            </a>
          </div>
        
          </div>
        </div>
      </nav>
    </div>
  );
}

export default AdminNavbar;
