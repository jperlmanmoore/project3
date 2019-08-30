import React, { Component } from "react";
import { Input, FormBtn } from "../components/Loginform/index";
import { Redirect } from "react-router-dom";
// import axios from "axios";
import API from "../utils/usersAPI";
import BananaLogo from "../components/BananaLogo/index";
// import "./LoginPage.css";

class LoginPage extends Component {

  state = {
    username: '',
    password: '',
    loggedIn: false,
    redirectTo: null,
  };

  handleChange = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
    console.log(event.target.value)
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log('handleSubmit');
    if (this.state.username) {
      API.getUsers(this.state.username, this.state.password)
        .then(response => {
          console.log(response, 'login response');

          if (response.status === 200) {
            console.log("successful login");
            this.setState({
              loggedIn: true,
              username: this.state.username,
              redirectTo: '/IdiomSearchPage'
            })
          }
        }).catch(error => console.log('login error: ', error))
    }
  };

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />
    } else {
      // can change this to look however it needs to look
      return (
        <div className="Login">       
        <BananaLogo/>
          <form>
          <p className="form-text text-muted">Already have a account? Login here.</p>
            <Input
              value={this.state.username}
              onChange={this.handleChange}
              name="username"
              placeholder="username (required)"
            />
            <Input
              value={this.state.password}
              onChange={this.handleChange}
              name="password"
              type="password"
              placeholder="password (required)"
            />
            <FormBtn
              // disabled={!(this.state.username && this.state.password)}
              onClick={this.handleSubmit}
            >
              Submit
              </FormBtn>
              
          </form>
        
        </div>
      )
    }
  }
}


export default LoginPage;

