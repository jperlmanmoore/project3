import React, { Component } from "react";
import API from "../utils/usersAPI";
import NavBar from "../components/NavBar";
import { Input, FormBtn } from "../components/Loginform/index";
import Footer from "../components/Footer";
// import { Redirect } from "react-router-dom";
// import axios from "axios";
import SignupForm from "../components/SignupForm"


class SignupPage extends Component {

    state = {
        first_name: "",
        last_name: "",
        username: "",
        password: "",
        confirmPassword: "",
    };

    handleChange = event => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        });
        console.log(event.target.value);
    };

    handleSubmit = event => {
        event.preventDefault();
        console.log('username: ')
        console.log(this.state.username);
        if (this.state.username) {
            API.saveUser({
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                username: this.state.username,
                email: this.state.email,
                password: this.state.password
            })
                .then(response => {
                    console.log(response)
                    if (!response.data.errmsg) {
                        console.log('successful signup')
                        this.setState({ //redirect to login page
                            redirectTo: '/login'
                        })
                    } else {
                        console.log('username already taken')
                    }
                }).catch(error => {
                    console.log('signup error: ')
                    console.log(error)

                })
        }
    }
    render() {
        // if (this.state.redirectTo) {
        //     return <Redirect to={{ pathname: this.state.redirectTo }} />
        // } else {
        // can change this to look however it needs to look
        return (
            <div>
                <form>
                    <Input
                        value={this.state.username}
                        onChange={this.handleChange}
                        name="username"
                        placeholder="username (required)"
                    />
                    <Input
                        value={this.state.first_name}
                        onChange={this.handleChange}
                        name="first_name"
                        placeholder="first_name (required)"
                    />
                    <Input
                        value={this.state.last_name}
                        onChange={this.handleChange}
                        name="last_name"
                        placeholder="last_name (required)"
                    />
                    <Input
                        value={this.state.password}
                        onChange={this.handleChange}
                        name="password"
                        placeholder="password (required)"
                    />
                    <Input
                        value={this.state.password}
                        onChange={this.handleChange.bind(this)}
                        name="confirmPassword"
                        placeholder="confirm password (required)"
                    />
                    <FormBtn
                        // disabled={!(this.state.username && this.state.password)}
                        onClick={this.handleSubmit}
                    >
                        Submit
                        </FormBtn>
                </form>
                <Footer></Footer>
                {/* <SignupForm /> */}
            </div>
        )
    }
}


export default SignupPage;
