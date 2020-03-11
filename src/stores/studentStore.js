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
    console.log("Students: ", _students);
    return _students;
  }

  getStudentById(id) {
    return _students.find(student => student.id === parseInt(id));
  }
}

const store = new StudentStore();

Dispatcher.register(action => {
  switch (action.actionType) {
    case actionTypes.CREATE_STUDENT:
      _students.push(action.student);
      store.emitChange();
      break;
    case actionTypes.LOAD_STUDENTS:
      _students = action.students;
      store.emitChange();
      break;
    case actionTypes.UPDATE_STUDENT:
      _students = _students.map(student =>
        student.id === action.student.id ? action.student : student
      );
      store.emitChange();
      break;
    case actionTypes.DELETE_STUDENT:
      _students = _students.filter(
        student => student.id !== parseInt(action.id, 10)
      );
      store.emitChange();
      break;
    default:
      break;
  }
});

export default store;
