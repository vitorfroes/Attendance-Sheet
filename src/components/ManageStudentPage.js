import React, { useState, useEffect } from "react";
import { getStudentById, saveStudent } from "../api/studentApi";
import StudentForm from "./StudentForm";

const ManageStudentPage = props => {
  const [student, setStudent] = useState({
    id: null,
    name: "",
    gender: "",
    age: null,
    classId: null
  });

  const handleChange = event => {
    const updatedStudent = {
      ...student,
      [event.target.name]: event.target.value
    };

    setStudent(updatedStudent);
  };

  const handleSubmit = event => {
    event.preventDefault();

    saveStudent(student);
  };

  useEffect(() => {
    if (props.match.params.id) {
      getStudentById(props.match.params.id).then(_student => {
        setStudent(_student);
      });
    }
  }, [props.match.params.id]);

  return (
    <>
      <div className="jumbotron">
        <h1>Manage Student</h1>

        <StudentForm
          student={student}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      </div>
    </>
  );
};

export default ManageStudentPage;
