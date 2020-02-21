import React from "react";
import TextInput from "./common/TextInput";

const ClassForm = props => {
  return (
    <form className="col-lg-6" onSubmit={props.onSubmit}>
      <TextInput
        id="name"
        label="Name"
        name="name"
        value={props.classObj.name}
        onChange={props.onChange}
      />

      <div className="form-group">
        <label htmlFor="age">Min Age</label>
        <div className="field">
          <input
            type="number"
            id="minAge"
            name="minAge"
            className="form-control"
            onChange={props.onChange}
            value={props.classObj.minAge || 0}
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="age">Max Age</label>
        <div className="field">
          <input
            type="number"
            id="maxAge"
            name="maxAge"
            className="form-control"
            onChange={props.onChange}
            value={props.classObj.maxAge || 0}
          />
        </div>
      </div>

      <TextInput
        id="room"
        label="Room"
        name="room"
        value={props.classObj.room}
        onChange={props.onChange}
      />

      <input type="submit" className="btn btn-primary" value="Save"></input>
    </form>
  );
};

export default ClassForm;
