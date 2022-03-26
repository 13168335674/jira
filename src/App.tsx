import "./App.css";

import { LoginScreen } from "screens/login";
import { ProjectListScreen } from "screens/project-list";
import React from "react";
import logo from "./logo.svg";

function App() {
  return (
    <div className="App">
      {/* <ProjectListScreen></ProjectListScreen> */}
      <LoginScreen />
    </div>
  );
}

export default App;
