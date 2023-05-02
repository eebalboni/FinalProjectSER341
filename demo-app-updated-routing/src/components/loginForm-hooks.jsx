import { React, useState } from "react";
import Joi from "joi-browser";

import auth from "../services/authService";

const LoginForm = () => {
  const [state, setState] = useState({
    data: { username: "", password: "" },
    errors: {},
  });

  // if (!auth.getCurrentUser()) window.location = "/";
  const validate = () => {
    const schema = {
      username: Joi.string().required().label("Username"),
      password: Joi.string().required().label("Password"),
    };
    const { error } = Joi.validate(state.data, schema, {
      abortEarly: false,
    });
    if (!error) return null;
    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    console.log(errors);
    return errors;
  };
  const validateProperty = ({ name, value }) => {
    let schema = {
      username: Joi.string().required().label("Username"),
      password: Joi.string().required().label("Password"),
    };
    const obj = { [name]: value };
    schema = { [name]: schema[name] };
    const { error } = Joi.validate(obj, schema);
    if (!error) return null;
    return error.details[0].message;
  };
  const handleChange = ({ currentTarget: input }) => {
    const errors = { ...state.errors } || {};
    const errorMessage = validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    setState((preValue) => {
      // Get the previous value of state
      return {
        ...preValue, // use the spread operator to get all the previous values of state
        [input.name]: input.value,
        errors: errors,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    // this.setState({ errors: errors || {} });
    setState((preValue) => {
      // Get the previous value of state
      return {
        ...preValue, // use the spread operator to get all the previous values of state
        errors: errors || {},
      };
    });
    try {
      const { username, password } = state.data;
      auth.login(username, password);

      //const { state } = this.props.location;
      //console.log(state);

      window.location = "/"; //state ? state.from.pathname : "/";
      // this.props.history.push("/");
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...state.errors };
        errors.username = ex.response.data;
        setState((preValue) => {
          // Get the previous value of state
          return {
            ...preValue, // use the spread operator to get all the previous values of state
            errors: errors,
          };
        });
      }
    }
    // console.log(this.state.email + " " + this.state.password);
  };

  return (
    <div>
      <h1>Login </h1>
      <form>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            className="form-control"
            defaultValue={state.data.username}
            onChange={handleChange}
            id="username"
            aria-describedby="usernameHelp"
          />
          {state.errors.username && (
            <div className="alert alert-danger"> {state.errors.username}</div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            defaultValue={state.data.password}
            name="password"
            onChange={handleChange}
            type="password"
            className="form-control"
          />
          {state.errors.password && (
            <div className="alert alert-danger"> {state.errors.password}</div>
          )}
          <button
            disabled={validate()}
            onClick={handleSubmit}
            className="btn btn-primary"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
