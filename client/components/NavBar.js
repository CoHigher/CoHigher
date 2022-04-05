import React from 'react';
import { Link } from 'react-router-dom';
// import Navbar from 'react-bootstrap/Navbar';
import { Navbar } from 'react-bootstrap';

const NavBar = () => {
  return (
    // <>
    //   <Navbar bg="dark" variant="dark">
    //     <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    //     <Nav className="me-auto">
    //       <Nav.Link to="/MyJobs">My Jobs</Nav.Link>
    //     </Nav>
    //   </Navbar>
    // </>
    <ul className="navbar-nav">
      <Link to="/" className="nav-link m-auto px-5">
        Home
      </Link>
      <Link to="/MyJobs" className="nav-link m-auto px-5">
        My Job Board
      </Link>
      <Link to="/Metrics" className="nav-link m-auto px-5">
        Metrics
      </Link>
      <Link to="/CohortView" className="nav-link m-auto px-5">
        Cohort Overview
      </Link>
    </ul>

    // <div>
    //     <nav className="navbar navbar-expand-lg navbar-light bg-light py-0">
    //       <div className="container-fluid">
    //         <button
    //           className="navbar-toggler"
    //           type="button"
    //           data-bs-toggle="collapse"
    //           data-bs-target="#navbarNavDropdown"
    //           aria-controls="navbarNavDropdown"
    //           aria-expanded="false"
    //           aria-label="Toggle navigation"
    //         >
    //           <span className="navbar-toggler-icon"></span>
    //         </button>
    //         <div
    //           className="collapse navbar-collapse justify-content-center"
    //           id="navbarNavDropdown"
    //         >
    //           <ul className="navbar-nav">
    //             <Link to="/" className="nav-link m-auto px-5">
    //               Home
    //             </Link>
    //             <Link to="/MyJobs" className="nav-link m-auto px-5">
    //               My Job Board
    //             </Link>
    //             <Link to="/Metrics" className="nav-link m-auto px-5">
    //               Metrics
    //             </Link>
    //             <Link to="/CohortView" className="nav-link m-auto px-5">
    //               Cohort Overview
    //             </Link>
    //           </ul>
    //         </div>
    //       </div>
    //     </nav>
    //   </div>
  );
};

export default NavBar;
