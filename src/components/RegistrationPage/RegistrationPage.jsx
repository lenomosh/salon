import React, { useState, useEffect } from "react";
import "./RegistrationPage.styles.scss";
import { Link } from "react-router-dom";
import Axios from "axios";

const RegistrationPage = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState(null);
  const [user, setUser] = useState(null)
  const url = "http://192.168.200.13:8000/graphql";
  
  const handleSubmit =event=>{
    event.preventDefault()
    const CREATE_USER =`
    mutation createUser($name:String!,$email:String!,$password:String!,$user_type_id:Int!){
      createUser(name:$name,password:$password,email:$email,user_type_id:$user_type_id){
        id
        name
      }
    }
    `;
    if (!user) {
      Axios.post(
        url,
        {
          query: CREATE_USER,
          variables:{
            name,email,password,user_type_id:1
          }
        },
        {
          headers: {
            Accept: "application/json",
          },
        }
      )
        .then((res) => {
          if (res.data.data) {
            if (res.data.data.createUser) {
              setUser(res.data.data.createUser);
            }
          }
          if (res.data.errors) {
            console.log(res.data.errors);
            if (res.data.errors[0].extensions.category == "graphql") {
              console.log("grapgql");
            } else {
              setErrors(res.data.errors[0].extensions.reason);
              
            }
          }
        })
        .catch((error) => console.log(error));
    }
    
   

  }
  return (
    <div className="registration-page text-white">
      <div className="registration-form">
        <form id="reg-form">
          <Link className="nav-link" to={"/"}>
            <img src="https://img.icons8.com/color/24/000000/logout-rounded-left--v1.png" />
          </Link>
          <h3>Sign Up</h3>
          <div className="row">
            <div className="col-md-12">
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="owner-name"
                  name="name"
                  onChange={({ target: { value } }) => setName(value)}
                  value={name}
                  placeholder="Name"
                />
              </div>

              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  onChange={({ target: { value } }) => setEmail(value)}
                  value={email}
                  id="vendor-email"
                  placeholder="Email Address"
                />
              </div>
              

              <div className="form-group">
                <label>Password</label>
                <input
                  onChange={({ target: { value } }) => setPassword(value)}
                  value={password}
                  type="password"
                  className="form-control"
                  id="vendor-password"
                  placeholder="Enter password"
                />
              </div>
              <div className="form-group">
                <label>Confirm Password</label>
                <input
                  onChange={({ target: { value } }) => setConfirmPassword(value)}
                  value={confirmPassword}
                  type="password"
                  className="form-control"
                  id="vendor-password"
                  placeholder="Confirm Password"
                />
              </div>
            </div>
          </div>

          <button onClick={(event)=>handleSubmit(event)} className="btn btn-primary btn-block">
            Get started
          </button>
          <p className="forgot-password text-right">
            Already registered?{" "}
            <Link to={"/vendor-login"}>
              <strong>Log in</strong>{" "}
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;
