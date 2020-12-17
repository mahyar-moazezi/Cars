import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const InvalidPage = (props) => {
  const style = {
    fontSize: "30px",
    textAlign: "center",
  };
  return (
    <div style={style}>
      <h1>Hey! You're Lost...</h1>
      <h3>
        Go to <Link to="/">Home</Link>
      </h3>
    </div>
  );
};
export default InvalidPage;
