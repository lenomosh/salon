import React from 'react'
import './WelcomePage.styles.scss'
import WelcomeNavbar from './WelcomePageNavbar'
import {Link} from 'react-router-dom'

const WelcomePage = () => {
  return (
    <div className="welcome-page">
      <WelcomeNavbar/>
      <div className="welcome-page-body text-white">
        <div className="banner">
          <h1 className="animate__animated animate__bounce animate__slow animate__infinite">Welcome To Urembo Salons</h1>
          <p className="d-lg-4">Every salon deserves the perfect tools for the job. Focus on your clients, not your admin,<br/> with features and services designed around you.</p>
          <Link to={"/vendor-register"}>
            <button type="button" className="btn btn-primary">Partner With Us</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default WelcomePage
