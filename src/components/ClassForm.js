import React from "react";
import TextInput from "./common/TextInput";
import NumberInput from "./common/NumberInput";

const ClassForm = props => {
  return (
    <form className="col-lg-6" onSubmit={props.onSubmit}>
      <TextInput
        id="name"
        label="Name"
        name="name"
        value={props.classObj.name}
        onChange={props.onChange}
        error={props.errors.name}
      />

      <NumberInput
        id="minAge"
        label="Min Age"
        name="minAge"
        onChange={props.onChange}
        value={props.classObj.minAge}
        error={props.errors.minAge}
      />

      <NumberInput
        id="maxAge"
        label="Max Age"
        name="maxAge"
        onChange={props.onChange}
        value={props.classObj.maxAge}
        error={props.errors.maxAge}
      />

      <TextInput
        id="room"
        label="Room"
        name="room"
        value={props.classObj.room}
        onChange={props.onChange}
        error={props.errors.room}
      />

      <input type="submit" className="btn btn-primary" value="Save"></input>
    </form>
  );
};

export default ClassForm;
