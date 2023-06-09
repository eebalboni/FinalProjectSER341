import React from "react";
import Joi from "joi-browser";
import Form from "../common/form";
import auth from "../services/authService";
import { Link } from "react-router-dom";


class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().min(5).label("Password"),
  };
 
  doSubmit = async () => {
    try {
      console.log("made it to dosumbit");
      const { data } = this.state;
       await auth.login(data.username, data.password);
      //console.log(response);
     // auth.loginWithJwt(response.body);
      
      // const { state } = this.props.location;
      window.location = "/student/courseHome"; // state ? state.from.pathname : "/";
    } catch (ex) {
      console.log(ex);
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
     //console.log("this is the login form");
    return (
      <body id="loginBody" onSubmit={this.handleSubmit}>
        <div class="background">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>

          <main class="pt-2">
            <div class="container py-5 h-100">
              <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                  <div class="card text-white" styles="border-radius: 1rem;" id="cardlogin">
                    <div class="card-body p-5 text-center">
                      <div class="mb-md-5 mt-md-2">
                        <h2 class="fw-bold mb-2 pb-2" id="loginTitle">
                          Welcome to Auto Grader
                        </h2>

                        <p class="pb-4" id="loginDesc">Please Sign In!</p>

                        <div class="form-outline form-white mb-4">
                          <form styles="{{}}" onSubmit={this.handleSubmit}>
                            {this.renderInput("username", "Username")}
                            {this.renderInput(
                              "password",
                              "Password",
                              "password"
                            )}
                            <div className="mt-5">{this.renderButton("Sign In")}</div>
                          </form>

                          
                        </div>

                        <div>
                          <p class="mb-0">
                            Don't have an account?{" "}
                            <Link to="/register" className="btn btn-dark" >Sign up</Link>
                          </p>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>

          <footer>
            <div class="text-center fixed-bottom pb-3" id="loginFooter">
              Chris Rocco - Emily Balboni - Amber Kusma &copy; Quinnipiac 2023
            </div>
          </footer>
        </div>
      </body>
    );
  }
}

export default LoginForm;
