import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./common/Header";
import StudentsPage from "./StudentsPage";
import ClassesPage from "./ClassesPage";
import { Route, Switch } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import ManageStudentPage from "./ManageStudentPage";

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage}></Route>
        <Route path="/about" component={AboutPage}></Route>
        <Route path="/students" component={StudentsPage}></Route>
        <Route path="/student/:id" component={ManageStudentPage}></Route>
        <Route path="/student" component={ManageStudentPage}></Route>
        <Route path="/classes" component={ClassesPage}></Route>
        <Route component={NotFoundPage}></Route>
      </Switch>
    </>
  );
};

export default App;
