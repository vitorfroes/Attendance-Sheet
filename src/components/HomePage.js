import React from "react";
import { Link } from "react-router-dom";

const HomePage = props => {
  return (
    <div className="jumbotron">
      <h1>Attendance Sheet</h1>
      <p>EBD Classes</p>

      <hr className="my-4"></hr>

      <Link to="about" className="btn btn-primary">
        About
      </Link>
    </div>
  );
};

export default HomePage;
