import React, { useState, useEffect } from "react";
import ClassForm from "./ClassForm";
import { saveClass, getClassById } from "../api/classApi";

const ManageClassPage = props => {
  const [classObj, setClassObj] = useState({
    id: null,
    name: "",
    maxAge: null,
    minAge: null,
    room: ""
  });

  const handleChange = event => {
    const updateClass = {
      ...classObj,
      [event.target.name]: event.target.value
    };

    setClassObj(updateClass);
  };

  const handleSubmit = event => {
    event.preventDeafult();

    saveClass(classObj);
  };

  useEffect(() => {
    if (props.match.params.id) {
      getClassById(props.match.params.id).then(_classObj => {
        setClassObj(_classObj);
      });
    }
  }, [props.match.params.id]);

  return (
    <div className="jumbotron">
      <h1>Manage Class</h1>

      <ClassForm
        classObj={classObj}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default ManageClassPage;
