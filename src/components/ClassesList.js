import React from "react";
import { Link } from "react-router-dom";

const ClassesList = props => {
  return (
    <table className="table table-light table-hover">
      <thead className="thead-dark">
        <tr>
          <th>&nbsp;</th>
          <th>Name</th>
          <th>Id</th>
        </tr>
      </thead>
      <tbody>
        {props.classes.map(classObj => {
          return (
            <tr key={classObj.id}>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  type="button"
                  onClick={() => {
                    props.deleteClass(classObj.id);
                  }}
                >
                  Delete
                </button>
              </td>
              <td>
                <Link to={"/class/" + classObj.id}>{classObj.name}</Link>
              </td>
              <td>{classObj.id}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ClassesList;
