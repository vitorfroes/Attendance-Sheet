import React, { useState, useEffect } from "react";
import StudentForm from "./StudentForm";
import { toast } from "react-toastify";
import studentStore from "../stores/studentStore";
import * as studentActions from "../actions/studentAction";

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

  const formIsValid = () => {
    const _errors = {};

    if (!student.name) _errors.name = "Name is required";
    if (!student.classId || student.classId === "") {
      _errors.classId = "Class is required";
    }
    if (!student.gender || student.gender === "") {
      _errors.gender = "Gender is required";
    }
    if (!student.age) _errors.age = "Age is required";

    setErrors(_errors);

    return Object.keys(_errors).length === 0;
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (!formIsValid()) {
      return;
    }

    studentActions.saveStudent(student).then(() => {
      props.history.push("/students");
      toast.success("A new student was created!");
    });
  };

  useEffect(() => {
    if (props.match.params.id) {
      setStudent(studentStore.getStudentById(props.match.params.id));
    }
  }, [props.match.params.id]);

  return (
    <>
      <div className="jumbotron">
        <h1>Manage Student</h1>

        <StudentForm
          errors={errors}
          student={student}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      </div>
    </>
  );
};

export default ManageStudentPage;
