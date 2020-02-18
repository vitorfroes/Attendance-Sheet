import React, { Component } from "react";
import { getStudents } from "../api/studentApi";
import StudentsList from "./StudentsList";
import { Link } from "react-router-dom";

class StudentsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: []
    };
  }

  componentDidMount() {
    getStudents().then(students => {
      this.setState({ students: students });
    });
  }

  render() {
    return (
      <div className="jumbotron">
        <h1>Students</h1>

        <br></br>

        <Link className="btn btn-primary" to="/student">
          Add Student
        </Link>

        <StudentsList students={this.state.students} />
      </div>
    );
  }
}

export default StudentsPage;
