import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = props => {
  return (
    <div className="jumbotron">
      <h1>404: Page not found.</h1>

      <hr className="my-4"></hr>

      <Link to="/" className="btn btn-primary">
        Back to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
