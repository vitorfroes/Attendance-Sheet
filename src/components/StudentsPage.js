import React, { useState, useEffect } from "react";
import StudentsList from "./StudentsList";
import { Link } from "react-router-dom";
import studentStore from "../stores/studentStore";
import { loadStudents } from "../actions/studentAction";

const StudentsPage = props => {
  const [students, setStudents] = useState(studentStore.getStudents());

  useEffect(() => {
    studentStore.addChangeListener(onChange);
    if (studentStore.getStudents().length === 0) loadStudents();
    return () => studentStore.removeChangeListener(onChange); //cleanup on unmount
  }, []);

  function onChange() {
    setStudents(studentStore.getStudents());
  }

  return (
    <div className="jumbotron">
      <h1>Students</h1>

      <br></br>

      <Link className="btn btn-primary" to="/student">
        Add Student
      </Link>

      <StudentsList students={students} />
    </div>
  );
};

export default StudentsPage;
