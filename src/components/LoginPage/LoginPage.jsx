import React, { useState ,useEffect} from "react";
import "./LoginPage.styles.scss";
import { gql, useQuery, useMutation } from "@apollo/client";

import { Link } from "react-router-dom";
import Axios from "axios";

const LoginPage = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [accessToken, setAccessToken] = useState('')
  const LOGIN =`
   mutation  login($username:String!,$password:String!){
      login(input:{
      username:$username, 
      password: $password
      }
    ) {
      access_token
    }   
  }
`;
  const handleSubmit = (event) => {
    const username = email;

    event.preventDefault();
    Axios.post("http://192.168.200.13:8000/graphql",{
      query:LOGIN,
      variables:{
        username,
        password
      }     

    },{
      headers:{
        Accept:"application/json"
      }
    }).then(res =>{
      if(res.data.data){
        if (res.data.data.login.access_token) {
          
        }
        console.log(res.data.data.login.access_token)
      }
      if (res.data.errors) {
          console.log(res.data.errors)   
          if(res.data.errors[0].extensions.category =="graphql")   {
            console.log('grapgql');
          }  
          else{
            console.log(res.data.errors[0].extensions.reason);
          }
      }
    })
    .catch(error=>console.log(error))

  };
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
            <input
              onChange={({ target: { value } }) => setEmail(value)}
              value={email}
              type="email"
              name="email"
              className="form-control"
              id="vendor-email"
              placeholder="Enter email"
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              onChange={({ target: { value } }) => setPassword(value)}
              value={password}
              type="password"
              name="password"
              className="form-control"
              id="vendor-password"
              placeholder="Enter password"
            />
          </div>

          <div className="form-group">
            <div className="custom-control custom-checkbox">
              <input
                onChange={({ target: { value } }) => setRememberMe(value)}
                value={rememberMe}
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>

          <button
            onClick={(event) => handleSubmit(event)}
            className="btn btn-primary btn-block"
          >
            Login
          </button>
          <Link to={"/vendor-register"}>
            <button className="btn btn-primary btn-block mt-2" type="button">
              Sign up
            </button>
          </Link>
          <p className="forgot-password text-right">
            Forgot <a href="#">password?</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
