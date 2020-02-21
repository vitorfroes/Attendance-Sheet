import React from "react";
import PropTypes from "prop-types";

const SelectInput = props => {
  return (
    <div className="form-group">
      <label htmlFor={props.id}>{props.label}</label>
      <div className="field">
        <select
          id={props.id}
          name={props.name}
          value={props.value || ""}
          onChange={props.onChange}
          className="form-control"
        >
          <option value="">Select</option>

          {props.option.map(classObj => {
            return (
              <option value={classObj.id} key={classObj.id}>
                {classObj.name}
              </option>
            );
          })}
        </select>
      </div>
      {props.error && <div className="alert alert-danger">{props.error}</div>}
    </div>
  );
};

SelectInput.propType = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

export default SelectInput;
