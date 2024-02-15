import React from 'react';
import './App.css';

function App() {
  return (
    
      
    <><nav class="navbar navbar-expand-sm bg-dark navbar-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="">JURLY</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
          <ul class="navbar-nav nav-tabs">
            <li class="nav-item">
              <a class="nav-link" href="">Home</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdowm-toggle" data-bs-toggle="dropdown" href="#">Products</a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Hodeis</a></li>
                <li><a class="dropdown-item" href="#">T-shirts</a></li>
                <li><a class="dropdown-item" href="#">Cups</a></li>
                <li><a class="dropdown-item" href="#">Mobile Cases</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Hot Sales</a>
            </li>
          </ul>

        </div>
      </div>

      <div class="d-flex justify-content-end">
        <input class="form-control mx-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-light me-2" type="submit">Search</button>
      </div>
    </nav>
    <nav class="navbar m-0 p-0 navbar-expand-sm navbar-light bg-secondary">
        <div class="container-fluid">
            <a class="navbar-brand text-light" href="#"><p className="addnav-font display-7 p-0 m-0">Additional Navbar</p></a>
        </div>
    </nav>
    
    </>

  );
}

export default App;
