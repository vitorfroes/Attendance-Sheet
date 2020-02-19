import React, { useState, useEffect } from "react";
import TextInput from "./common/TextInput";
import SelectInput from "./common/SelectInput";
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
      />

      <SelectInput
        id="class"
        name="classId"
        label="Class"
        value={props.student.classId || ""}
        onChange={props.onChange}
        className="form-control"
        option={classesList}
      />

      <SelectInput
        id="gender"
        name="gender"
        label="Gender"
        onChange={props.onChange}
        value={props.student.gender}
        option={genderList}
      />

      <div className="form-group">
        <label htmlFor="age">Age</label>
        <div className="field">
          <input
            type="number"
            id="age"
            name="age"
            className="form-control"
            onChange={props.onChange}
            value={props.student.age || 0}
          />
        </div>
      </div>

      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
};

export default StudentForm;
