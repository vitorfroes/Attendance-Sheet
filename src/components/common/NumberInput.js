import React from "react";

const NumberInput = props => {
  return (
    <div className="form-group">
      <label htmlFor={props.id}>{props.label}</label>
      <div className="field">
        <input
          type="number"
          id={props.id}
          name={props.name}
          className="form-control"
          onChange={props.onChange}
          value={props.value || 0}
        />
      </div>
      {props.error && <div className="alert alert-danger">{props.error}</div>}
    </div>
  );
};

export default NumberInput;
