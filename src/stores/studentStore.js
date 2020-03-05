import { EventEmitter } from "events";
import Dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";

const CHANGE_EVENT = "change";
let _students = [];

class StudentStore extends EventEmitter {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  getStudents() {
    return _students;
  }

  getStudentById(id) {
    return _students.find(student => student.id === id);
  }
}

const store = new StudentStore();

Dispatcher.register(action => {
  switch (action.actionType) {
    case actionTypes.CREATE_STUDENT:
      _students.push(action.student);
      store.emitChange();
      break;
    default:
      break;
  }
});

export default store;
