import React, { useState } from 'react';
import './LoginPage.styles.scss'
import Axios from 'axios'
import { Link } from 'react-router-dom'

const LoginPage = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const handleSubmit = event => {
    event.preventDefault();
    const graphql = `
    { 
      business(id:1){
        owner{
          name
        }
      }
    }
      `;

    Axios.post("http://localhost:8000/graphql", { query: graphql }

    ).then(res => console.log(res.data.data)).catch(error => console.log(error));


  }
  return (
    <div className="login-page text-white">
      <div className="login-form">
        <form id="login-form">
          <Link className="nav-link" to={"/"}>
            <img src="https://img.icons8.com/color/24/000000/logout-rounded-left--v1.png" />
          </Link>
          <h3>Sign In</h3>

          <div className="form-group">
            <label>Email address</label>
            <input onChange={({ target: { value } }) => setEmail(value)} value={email} type="email" name="email" className="form-control" id="vendor-email" placeholder="Enter email" />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input onChange={({ target: { value } }) => setPassword(value)} value={password} type="password" name='password' className="form-control" id="vendor-password" placeholder="Enter password" />
          </div>

          <div className="form-group">
            <div className="custom-control custom-checkbox">
              <input onChange={({ target: { value } }) => setRememberMe(value)} value={rememberMe} type="checkbox" className="custom-control-input" id="customCheck1" />
              <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
            </div>
          </div>

          <button onClick={event => handleSubmit(event)} className="btn btn-primary btn-block">Login</button>
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