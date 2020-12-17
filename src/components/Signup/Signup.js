import React, { Fragment } from "react";
import { connect } from "react-redux";
import Classes from "./Signup.module.css";
import * as authIndex from "../../store/action/index";
import Spinner from "../../UI/Spinner/Spinner";
import { withRouter } from "react-router";
const Signup = (props) => {
  const emailHandler = (event) => {
    const value = event.target.value;
    props.onEmailRegister(value);
  };
  const passHandler = (event) => {
    const value = event.target.value;
    props.onPassRegister(value);
  };
  const registerHandler = () => {
    props.onRegister(props.email, props.password);
    if (!props.error) {
      props.history.replace("/");
    }
  };
  let spinner = <Spinner />;
  if (!props.loading) {
    spinner = (
      <Fragment>
        <form
          className={Classes.Signup}
          onSubmit={(e) => e.preventDefault()}
        >
          <label>
            Email: <br />
            <input
              type="email"
              placeholder="Write your Email"
              onChange={emailHandler}
            />
          </label>
          <label>
            Password: <br />
            <input
              type="password"
              placeholder="Write your Password"
              onChange={passHandler}
            />
          </label>
          <button onClick={registerHandler}>Submit</button>
        </form>
      </Fragment>
    );
  }
  let errorMessage = null;
  if (props.error) {
    errorMessage = (
      <h1 style={{ textAlign: "center" }}>
        ERROR! Your request is failed... please try again
      </h1>
    );
  }
  return (
    <>
      {errorMessage}
      {spinner}
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    email: state.authReducer.email,
    password: state.authReducer.password,
    loading: state.authReducer.loading,
    error: state.authReducer.error,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onEmailRegister: (value) =>
      dispatch(authIndex.emailRegister(value)),
    onPassRegister: (value) =>
      dispatch(authIndex.passRegister(value)),
    onRegister: (email, pass) =>
      dispatch(authIndex.register(email, pass)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Signup));
