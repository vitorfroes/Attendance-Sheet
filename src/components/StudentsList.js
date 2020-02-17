import React from "react";

const StudentsList = props => {
  return (
    <table className="table table-response table-light table-hover">
      <thead className="thead-dark">
        <tr>
          <th>Student</th>
          <th>Age</th>
          <th>Gender</th>
        </tr>
      </thead>
      <tbody>
        {props.students.map(student => {
          return (
            <tr key={student.id}>
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
