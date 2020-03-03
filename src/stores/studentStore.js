import { EventEmitter } from "events";

const CHANGE_EVENT = "change";

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
}
const store = new StudentStore();

export default store;