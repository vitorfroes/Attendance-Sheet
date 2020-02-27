import dispatcher from "../appDispatcher";
import * as studentApi from "../api/studentApi";
import actionTypes from "./actionTypes";

export function saveStudent(student) {
  return studentApi.saveStudent(student).then(savedStudent => {
    dispatcher.dispatch({
      actionType: actionTypes.CREATE_STUDENT,
      student: savedStudent
    });
  });
}
