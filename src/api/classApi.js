import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.REACT_APP_API_URL + "/classes/";

export function getClasses() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function saveClass(classObj) {
  return fetch(baseUrl + (classObj.id || ""), {
    method: classObj.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(classObj)
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteAuthor(classId) {
  return fetch(baseUrl + classId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
