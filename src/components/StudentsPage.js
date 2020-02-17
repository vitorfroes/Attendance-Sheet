import React, { Component } from "react";
import { getStudent } from "../api/studentApi";
import StudentsList from "./StudentsList";

class StudentsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: []
    };
  }

  componentDidMount() {
    getStudent().then(students => {
      this.setState({ students: students });
    });
  }

  render() {
    return (
      <div className="jumbotron">
        <h1>Students</h1>

        <br></br>

        <StudentsList students={this.state.students} />
      </div>
    );
  }
}

export default StudentsPage;
