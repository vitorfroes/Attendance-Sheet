import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./common/Header";
import StudentsPage from "./StudentsPage";
import ClassesPage from "./ClassesPage";
import { Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <Route path="/" exact component={HomePage}></Route>
      <Route path="/about" component={AboutPage}></Route>
      <Route path="/students" component={StudentsPage}></Route>
      <Route path="/classes" component={ClassesPage}></Route>
    </>
  );
};

export default App;
