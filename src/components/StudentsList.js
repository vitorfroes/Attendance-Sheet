import React from "react";
import { Link } from "react-router-dom";

const StudentsList = props => {
  return (
    <table className="table table-response table-light table-hover">
      <thead className="thead-dark">
        <tr>
          <th>Id</th>
          <th>Student</th>
          <th>Age</th>
          <th>Gender</th>
        </tr>
      </thead>
      <tbody>
        {props.students.map(student => {
          return (
            <tr key={student.id}>
              <td>
                <Link to={"/student/" + student.id}>{student.id}</Link>
              </td>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.gender}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default StudentsList;
