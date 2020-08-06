import React from 'react';
import './LoginPage.css'


class LoginPage extends React.Component {

  render() {
    return (
      <React.Fragment>
      <div className="my-form">
      <div className="form">
        <div className="form-btn">
          <div id="btn" />
          <button type="button" className="toggle-btn">Login</button>
          <button type="button" className="toggle-btn">Register</button>
        </div>
        <form id="login" className="input-form" action>
          <input type="email" className="input-field" placeholder=" Enter Email " required />
          <input type="text" className="input-field" placeholder="Enter password" required />
          <input type="checkbox" className="check-form" /> <span>Remember password</span>
          <button type="submit" className="submit-btn">Log In</button>
        </form>
        <form id="register" className="input-form" action>
          <input type="text" className="input-field" placeholder="Full Name" required />
          <input type="text" className="input-field" placeholder="Enter Password" required />
          <input type="text" className="input-field" placeholder="Confirm Password" required />
          <input type="checkbox" className="check-form" /> <span>Terms &amp; Conditions</span>
          <button type="submit" className="submit-btn">Register</button>
        </form>
      </div>
    </div>
</React.Fragment>
    );
  }
}

export default LoginPage;