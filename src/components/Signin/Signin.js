import React, { Fragment } from "react";
import Classes from "./Signin.module.css";
import * as authIndex from "../../store/action/index";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router";
import Spinner from "../../UI/Spinner/Spinner";
const Signin = (props) => {
  const emailHandler = (event) => {
    const value = event.target.value;
    props.onEmailRegister(value);
  };
  const passHandler = (event) => {
    const value = event.target.value;
    props.onPassRegister(value);
  };
  const signinHandler = () => {
    props.onSignin(props.email, props.password);
    props.history.replace("/");
  };

  let errorMessage = null;
  if (props.error) {
    errorMessage = (
      <h1 style={{ textAlign: "center" }}>
        Email or Password was incorrect
      </h1>
    );
  }
  let spinner = <Spinner />;
  if (!props.loading) {
    spinner = (
      <Fragment>
        <form
          className={Classes.Signin}
          onSubmit={(e) => e.preventDefault()}
        >
          <label>
            Email: <br />
            <input
              type="email"
              placeholder="Your Email"
              onChange={emailHandler}
            />
          </label>
          <label>
            Password: <br />
            <input
              type="password"
              placeholder="Your Password"
              onChange={passHandler}
            />
          </label>
          <button onClick={signinHandler}>Signin</button>
        </form>
      </Fragment>
    );
  }
  return (
    <div>
      <>
        {errorMessage}
        {spinner}
      </>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    email: state.authReducer.email,
    password: state.authReducer.password,
    loading: state.authReducer.loading,
    error: state.authReducer.error,
    auth: state.authReducer.auth,
    localId: state.authReducer.localId !== null,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onEmailRegister: (value) =>
      dispatch(authIndex.emailRegister(value)),
    onPassRegister: (value) =>
      dispatch(authIndex.passRegister(value)),
    onSignin: (email, pass) =>
      dispatch(authIndex.signin(email, pass)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Signin));
