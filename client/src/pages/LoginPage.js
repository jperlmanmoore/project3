import React, { Component } from "react";
import { Input, FormBtn } from "../components/Loginform/index";
import { Redirect } from "react-router-dom";
import axios from "axios";
import BananaLogo from "../components/BananaLogo";
import Form from "../components/LForm";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";


class LoginPage extends Component {
  
   state = {
          username: '',
          password: '',
          loggedIn: false,
          redirectTo: null,
      }
    //   this.handleSubmit = this.handleSubmit.bind(this)
    //   this.handleChange.bind(this)

//   handleChange = name => event => {
//       this.setState({
//           [name]: event.target.value
//       })
//       console.log(event.target.value)
//   };

  handleChange = event => {
      const { name, value } = event.target
    this.setState({
        [name]: value
    })
    console.log(event.target.value)
};

  handleSubmit = event => {
      event.preventDefault()
      console.log('handleSubmit')

      axios.post('user/login', {
          usernmae: this.state.username,
          password: this.state.password
      })
          .then(response => {
              console.log('login response: ')
              console.log('response')
              if (response.status === 200) {
                  this.props.updateUser({
                      loggedIn: true,
                      username: response.data.username
                  })
                  this.setState({
                      redirectTo: '/'
                  })
              }
          }).catch(error => {
              console.log('login error: ')
              console.log('error')
          })
  };

  render() {
      if (this.state.redirectTo) {
          return <Redirect to={{ pathname: this.state.redirectTo }} />
      } else {
          // can change this to look however it needs to look
          return (
              <div>
                <BananaLogo />
                <form>
                <small id="emailHelp" class="form-text text-muted">Already have a account? Login here.</small>
              <Input
                value={this.state.username}
                onChange={this.handleChange.bind(this)}
                name="username"
                placeholder="username (required)"   
              />
              <Input
                value={this.state.password}
                onChange={this.handleChange.bind(this)}
                name="password"
                placeholder="password (required)"
              />
              
  
              <FormBtn
                // disabled={!(this.state.username && this.state.password)}
                onClick={this.handleSubmit}
              >
                Submit
              </FormBtn>
            </form>
            {/* <Form /> */}

            <Footer></Footer>
              </div>
          )
      }
  }
}

export default LoginPage;

