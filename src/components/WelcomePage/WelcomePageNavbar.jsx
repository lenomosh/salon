import React from 'react'

const WelcomePageNavbar = () => {
  return (
    <div className="welcome-navbar">
      <nav className="navbar sticky-top navbar-expand-lg  navbar-dark ">
        <div className="container">
            <a className="navbar-brand text-white" href="index.html">Urembo<br/><small>Salons</small></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#welcomenav" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          <div className="collapse navbar-collapse" id="welcomenav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Why Urembo</a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <a className="dropdown-item" href="#">Something else here</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">Separated link</a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Features</a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <a className="dropdown-item" href="#">Something else here</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">Separated link</a>
                </div>
              </li>
              <li className="nav-item">
                <button class="btn btn-outline-success" type="button">Sign Up</button>
              </li>
              <li className="nav-item"><a href="#contact" className="nav-link">Log in</a></li>
            </ul>
          </div>
        </div>
		  </nav>
    </div>
  )
}

export default WelcomePageNavbar
