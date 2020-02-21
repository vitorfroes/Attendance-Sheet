const students = [
  {
    id: 1,
    name: "Nicolas Freitas",
    age: 8,
    classId: 1,
    gender: "Male"
  },
  {
    id: 2,
    name: "Luisa",
    age: 14,
    classId: 1,
    gender: "Female"
  },
  {
    id: 3,
    name: "Vitória Fróes",
    age: 17,
    classId: 1,
    gender: "Female"
  },
  {
    id: 4,
    name: "Sara Cristina",
    age: 21,
    classId: 1,
    gender: "Female"
  },
  {
    id: 5,
    name: "Rafael Correa",
    age: 29,
    classId: 1,
    gender: "Male"
  },
  {
    id: 6,
    name: "Hugo Maia",
    age: 20,
    classId: 1,
    gender: "Male"
  },
  {
    id: 7,
    name: "Otávio Cruz",
    age: 16,
    classId: 1,
    gender: "Male"
  },
  {
    id: 8,
    name: "Maria Victoria",
    age: 16,
    classId: 1,
    gender: "Female"
  },
  {
    id: 9,
    name: "Maryanne Morais",
    age: 17,
    classId: 1,
    gender: "Female"
  },
  {
    id: 10,
    name: "Severina Nunes",
    age: 67,
    classId: 1,
    gender: "Female"
  }
];

const classes = [
  { id: 1, name: "Cordeirinhos" },
  { id: 2, name: "LPC" },
  { id: 3, name: "LDM" },
  { id: 4, name: "Paul of Tarsus" },
  { id: 5, name: "Rachel" }
];

const newStudent = {
  id: null,
  name: "",
  classId: null,
  gender: ""
};

const newClass = {
  id: null,
  name: "",
  maxAge: null,
  minAge: null,
  room: ""
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newStudent,
  newClass,
  students,
  classes
};
