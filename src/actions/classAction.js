import dispatcher from "../appDispatcher";
import * as classApi from "../api/classApi";
import actionTypes from "./actionTypes";

export function saveClass(classObj) {
  return classApi.saveClass(classObj).then(savedClass => {
    dispatcher.dispatch({
      actionType: classObj.id
        ? actionTypes.UPDATE_CLASS
        : actionTypes.CREATE_STUDENT,
      classObj: savedClass
    });
  });
}

export function loadClasses() {
  return classApi.getClasses().then(classes => {
    console.log(classes);
    dispatcher.dispatch({
      actionType: actionTypes.LOAD_CLASSES,
      classes: classes
    });
  });
}

export function deleteClass(id) {
  return classApi.deleteClass(id).then(() => {
    dispatcher.dispatch({
      actionType: actionTypes.DELETE_CLASS,
      id: id
    });
  });
}
