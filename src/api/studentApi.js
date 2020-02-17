import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.REACT_APP_API_URL + "/students/";

export function getStudent() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function getStudantByName(name) {
  return fetch(baseUrl + "?name=" + name)
    .then(response => {
      if (!response.ok) throw new Error("Network response was not ok.");
      return response.json().then(students => {
        if (students.length !== 1)
          throw new Error("Student not found: " + name);
        return students[0]; // should only find one student for a given name, so return it.
      });
    })
    .catch(handleError);
}

export function saveStudent(student) {
  return fetch(baseUrl + (student.id || ""), {
    method: student.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      ...student,
      // Parse classId to a number (in case it was sent as a string).
      classId: parseInt(student.classId, 10)
    })
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteStudent(studentId) {
  return fetch(baseUrl + studentId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
