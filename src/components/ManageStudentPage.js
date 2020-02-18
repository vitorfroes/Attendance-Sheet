import React, { useState, useEffect } from "react";
import { getStudentById } from "../api/studentApi";
import StudentForm from "./StudentForm";

const ManageStudentPage = props => {
  const [student, setStudent] = useState({
    id: null,
    name: "",
    gender: "",
    age: null,
    classId: null
  });

  const handleNameChange = event => {
    const updatedStudent = { ...student, name: event.target.value };

    setStudent(updatedStudent);
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

        <StudentForm student={student} onNameChange={handleNameChange} />
      </div>
    </>
  );
};

export default ManageStudentPage;
