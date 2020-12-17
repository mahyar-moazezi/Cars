import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import * as actionIndex from "../../store/action/index";
import Classes from "./Toolbar.module.css";
const Toolbar = (props) => {
  const logoutHandler = () => {
    props.onLogout();
    localStorage.removeItem("token");
    props.onLcFalse();
  };

  return (
    <Fragment>
      <nav className={Classes.Toolbar}>
        <div className={Classes.Navitem}>
          <NavLink to="/" exact activeClassName={Classes.active}>
            HOME
          </NavLink>
          {props.auth && (
            <NavLink to="/cars" activeClassName={Classes.active}>
              CARS
            </NavLink>
          )}
        </div>
        <div className={Classes.Btn}>
          {!props.auth ? (
            <Fragment>
              <Link to="/signup">
                <button className={Classes.Signup}>
                  SignUp
                </button>
              </Link>
              <Link to="/signin">
                <button className={Classes.Signin}>
                  SignIn
                </button>
              </Link>
            </Fragment>
          ) : (
            <Link to="/">
              <button
                className={Classes.Logout}
                onClick={logoutHandler}
              >
                Logout
              </button>
            </Link>
          )}
        </div>
        
      </nav>
    </Fragment>
  );
};
const mapStateToProps = (state) => {
  return {
    auth: state.authReducer.auth,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => dispatch(actionIndex.logout()),
    onLcFalse: () => dispatch(actionIndex.lcFalse()),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(Toolbar));
