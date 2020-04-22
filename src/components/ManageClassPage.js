import React, { useState, useEffect } from "react";
import ClassForm from "./ClassForm";
import classStore from "../stores/classStore";
import * as classActions from "../actions/classAction";
import { toast } from "react-toastify";

const ManageClassPage = (props) => {
  const [classes, setClasses] = useState(classStore.getClasses());
  const [errors, setErrors] = useState({});
  const [classObj, setClassObj] = useState({
    id: null,
    name: "",
    maxAge: 0,
    minAge: 0,
    room: "",
  });

  useEffect(() => {
    classStore.addChangeListener(onChange);

    if (classes.length === 0) {
      classActions.loadClasses();
    } else if (props.match.params.id) {
      setClassObj(classStore.getClassById(props.match.params.id));
    }

    return () => classStore.removeChangeListener(onChange);
  }, [classes.length, props.match.params.id]);

  const onChange = () => {
    setClasses(classStore.getClasses());
  };

  const handleChange = (event) => {
    const updateClass = {
      ...classObj,
      [event.target.name]: event.target.value,
    };

    setClassObj(updateClass);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formIsValid()) {
      return;
    }

    classActions.saveClass(classObj).then(() => {
      props.history.push("/classes");

      if (classObj.id) toast.success("A class was updated!");
      else toast.success("A new class was created!");
    });
  };

  const formIsValid = () => {
    const _errors = {};

    if (!classObj.name) _errors.name = "Name is required";

    if (!classObj.room || classObj.room === "") {
      _errors.room = "Room is required";
    }

    if (!classObj.maxAge) _errors.age = "Max Age is required";

    if (!classObj.minAge) _errors.age = "Min Age is required";

    setErrors(_errors);

    return Object.keys(_errors).length === 0;
  };

  return (
    <div className="jumbotron">
      <h1>Manage Class</h1>

      <ClassForm
        errors={errors}
        classObj={classObj}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default ManageClassPage;
