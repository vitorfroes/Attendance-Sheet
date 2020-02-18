import React from "react";

const StudentForm = props => {
  return (
    <form className="col-lg-6">
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <div className="field">
          <input
            id="name"
            type="text"
            name="name"
            className="form-control"
            value={props.student.name}
            onChange={props.onNameChange}
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="class">Class</label>
        <div className="field">
          <select
            id="class"
            name="classId"
            value={props.student.classId || ""}
            className="form-control"
          >
            <option value="" />
            <option value="1">Cordeirinhos</option>
            <option value="2">LPC</option>
          </select>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="Gender">Gender</label>
        <div className="field">
          <input
            type="text"
            id="gender"
            name="gender"
            className="form-control"
            value={props.student.gender}
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="Gender">Age</label>
        <div className="field">
          <input
            type="number"
            id="age"
            name="age"
            className="form-control"
            value={props.student.age || 0}
          />
        </div>
      </div>

      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
};

export default StudentForm;
