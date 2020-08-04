import React from 'react';
import './RegistrationPage.styles.scss'
import {Link} from 'react-router-dom'

const RegistrationPage=(props)=> {
  return (
    <div className="registration-page text-white">
      <div className="registration-form">
        <form>
          <Link className="nav-link" to={"/"}><img src="https://img.icons8.com/color/24/000000/logout-rounded-left--v1.png"/></Link>
          <h3>Sign Up</h3>

          <div className="form-group">
            <label>First name</label>
            <input type="text" className="form-control" placeholder="First name" />
          </div>

          <div className="form-group">
            <label>Last name</label>
            <input type="text" className="form-control" placeholder="Last name" />
          </div>

          <div className="form-group">
            <label>Email address</label>
            <input type="email" className="form-control" placeholder="Enter email" />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Enter password" />
          </div>

          <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
          <p className="forgot-password text-right">
            Already registered <Link to={"/vendor-login"}>Log in</Link>
          </p>
        </form>
      </div>      
    </div>
  );
}

export default RegistrationPage;