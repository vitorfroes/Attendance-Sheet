import React, { useState, useEffect } from "react";
import ClassesList from "./ClassesList";
import { Link } from "react-router-dom";
import classStore from "../stores/classStore";
import { loadClasses, deleteClass } from "../actions/classAction";

const ClassesPage = () => {
  const [classes, setClasses] = useState(classStore.getClasses());

  useEffect(() => {
    classStore.addChangeListener(onChange);
    if (classStore.getClasses().length === 0) loadClasses();
    return () => classStore.removeChangeListener(onChange);
  }, []);

  function onChange() {
    setClasses(classStore.getClasses());
  }

  return (
    <>
      <div className="jumbotron">
        <h1 className="Classes">Classes</h1>

        <br />

        <Link className="btn btn-primary" to="/class">
          Add Class
        </Link>

        <ClassesList classes={classes} deleteClass={deleteClass} />
      </div>
    </>
  );
};

export default ClassesPage;
