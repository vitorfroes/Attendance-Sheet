import React from "react";

const ClassesList = props => {
  return (
    <table className="table table-light table-hover">
      <thead className="thead-dark">
        <tr>
          <th>Name</th>
          <th>Id</th>
        </tr>
      </thead>
      <tbody>
        {props.classes.map(classObj => {
          return (
            <tr key={classObj.id}>
              <td>{classObj.name}</td>
              <td>{classObj.id}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ClassesList;
