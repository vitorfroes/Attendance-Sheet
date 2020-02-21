import React, { useState, useEffect } from "react";
import { getStudentById, saveStudent } from "../api/studentApi";
import StudentForm from "./StudentForm";
import { toast } from "react-toastify";

const ManageStudentPage = props => {
  const [errors, setErrors] = useState({});

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

    saveStudent(student).then(() => {
      props.history.push("/students");
      toast.success("A new student was created!");
    });
  };

  const formIsValid = () => {
    const _errors = {};

    if (!student.name) _errors.name = "Name is required";
    if (!student.classId) _errors.classId = "Class is required";
    if (!student.gender) _errors.gender = "Gender is required";
    if (!student.age) _errors.age = "Age is required";

    setErrors(_errors);
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
