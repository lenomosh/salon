import React from 'react';
import './LoginPage.styles.scss'
import {Link} from 'react-router-dom'

const LoginPage=(props)=> {
  return (
    <div className="login-page text-white">
      <div className="login-form">
        <form>
          <Link className="nav-link" to={"/"}><img src="https://img.icons8.com/color/24/000000/logout-rounded-left--v1.png"/></Link>
          <h3>Sign In</h3>

          <div className="form-group">
            <label>Email address</label>
            <input type="email" className="form-control" placeholder="Enter email" />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Enter password" />
          </div>

          <div className="form-group">
            <div className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" id="customCheck1" />
              <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
            </div>
          </div>

          <button type="submit" className="btn btn-primary btn-block">Login</button>
          <Link to={"/vendor-register"}>
            <button className="btn btn-primary btn-block mt-2" type="button">Sign up</button>
          </Link>
          <p className="forgot-password text-right">
            Forgot <a href="#">password?</a>
          </p>
        </form>
      </div>
        
    </div>
  );
}

export default LoginPage;