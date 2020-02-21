import React, { useState, useEffect } from "react";
import { getClasses } from "../api/classApi";
import ClassesList from "./ClassesList";
import { Link } from "react-router-dom";

const ClassesPage = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    getClasses().then(_classes => setClasses(_classes));
  }, []);

  return (
    <>
      <div className="jumbotron">
        <h1 className="Classes">Classes</h1>

        <br />

        <Link className="btn btn-primary" to="/class">
          Add Class
        </Link>

        <ClassesList classes={classes} />
      </div>
    </>
  );
};

export default ClassesPage;
