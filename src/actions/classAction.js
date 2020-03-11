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
