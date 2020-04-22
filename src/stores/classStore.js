import { EventEmitter } from "events";
import Dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";

const CHANGE_EVENT = "change";
let _classes = [];

class ClassStore extends EventEmitter {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  getClasses() {
    return _classes;
  }

  getClassById(id) {
    return _classes.find((classObj) => classObj.id === parseInt(id));
  }
}

const store = new ClassStore();

Dispatcher.register((action) => {
  switch (action.actionType) {
    case actionTypes.CREATE_CLASS:
      _classes.push(action.classObj);
      store.emitChange();
      break;
    case actionTypes.LOAD_CLASSES:
      _classes = action.classes;
      store.emitChange();
      break;
    case actionTypes.UPDATE_CLASS:
      _classes = _classes.map((classObj) =>
        classObj.id === action.classObj.id ? action.classObj : classObj
      );
      store.emitChange();
      break;
    case actionTypes.DELETE_CLASS:
      _classes = _classes.filter(
        (classObj) => classObj.id !== parseInt(action.id, 10)
      );
      store.emitChange();
      break;
    default:
      break;
  }
});

export default store;
