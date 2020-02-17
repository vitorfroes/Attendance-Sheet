import React, { useState, useEffect } from "react";
import { getStudentById } from "../api/studentApi";

const ManageStudentPage = props => {
  const [student, setStudent] = useState(null);

  useEffect(() => {
    getStudentById(props.match.params.id).then(_student => {
      console.log(_student);
      setStudent(_student);
    });
  }, [props.match.params.id]);

  return (
    <>
      <div className="jumbotron">
        <h1>Manage Student</h1>
        {props.match.params.id}

        <input type="text"></input>
      </div>
    </>
  );
};

export default ManageStudentPage;
