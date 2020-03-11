import React, { useState, useEffect } from "react";
import TextInput from "./common/TextInput";
import SelectInput from "./common/SelectInput";
import NumberInput from "./common/NumberInput";
import PropTypes from "prop-types";
import { getClasses } from "../api/classApi";

const StudentForm = props => {
  const [classesList, setClassesList] = useState([]);
  const genderList = [
    { id: "Male", name: "Male" },
    { id: "Female", name: "Female" }
  ];

  useEffect(() => {
    getClasses().then(_classes => setClassesList(_classes));
  }, []);

  return (
    <form className="col-lg-6" onSubmit={props.onSubmit}>
      <TextInput
        id="name"
        label="Name"
        name="name"
        value={props.student.name}
        onChange={props.onChange}
        error={props.errors.name}
      />

      <SelectInput
        id="class"
        name="classId"
        label="Class"
        value={props.student.classId || ""}
        onChange={props.onChange}
        className="form-control"
        option={classesList}
        error={props.errors.classId}
      />

      <SelectInput
        id="gender"
        name="gender"
        label="Gender"
        onChange={props.onChange}
        value={props.student.gender}
        option={genderList}
        error={props.errors.gender}
      />

      <NumberInput
        label="Age"
        id="age"
        name="age"
        onChange={props.onChange}
        value={props.student.age}
        error={props.errors.age}
      />

      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
};

StudentForm.propTypes = {
  student: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

export default StudentForm;
