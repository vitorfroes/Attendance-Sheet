import dispatcher from "../appDispatcher";
import * as studentApi from "../api/studentApi";
import actionTypes from "./actionTypes";

export function saveStudent(student) {
  return studentApi.saveStudent(student).then(savedStudent => {
    dispatcher.dispatch({
      actionType: student.id
        ? actionTypes.UPDATE_STUDENT
        : actionTypes.CREATE_STUDENT,
      student: savedStudent
    });
  });
}

export function loadStudents() {
  return studentApi.getStudents().then(students => {
    dispatcher.dispatch({
      actionType: actionTypes.LOAD_STUDENTS,
      students: students
    });
  });
}
