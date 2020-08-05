import React from 'react'
import {Link} from 'react-router-dom'

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
                  <div className="row">
                    <div className="col-md-6">
                      <p className="dropdown-item">Get noticed</p>
                      <p className="dropdown-item">Get booked</p>
                    </div>
                    <div className="col-md-6">
                      <p className="dropdown-item">Get repeats</p>
                      <p className="dropdown-item">Get organised</p>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Features</a>
                <div className="dropdown-menu">
                  <div className="row">
                    <div className="col-md-6">
                      <p className="dropdown-item">Powerful salon<br/> software</p>
                      <p className="dropdown-item">24/7 online <br/>booking</p>
                      <p className="dropdown-item">Secure client<br/> management</p>
                    </div>
                    <div className="col-md-6">
                      <p className="dropdown-item">Easy marketing <br/>tools</p>
                      <p className="dropdown-item">Personalised<br/> website</p>
                      <p className="dropdown-item">Smart pricing</p>
                      <p className="dropdown-item">Point of sale</p>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/vendor-register"}>
                  <button className="btn btn-outline-primary" type="button">Sign up</button>
                </Link>
              </li>
              <li className="nav-item"><Link className="nav-link" to={"/vendor-login"}>Log in</Link></li>
            </ul>
          </div>
        </div>
		  </nav>
    </div>
  )
}

export default WelcomePageNavbar
