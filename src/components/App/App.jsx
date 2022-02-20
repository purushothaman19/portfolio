import React from "react";
import Profile from "../Profile/Profile";
import Skills from "../Skills/Skills";
import TopBar from "../TopBar/TopBar";
import Works from "../Works/Works";

function App() {
  return (
    <div className="App">
    <TopBar />
    <Skills />
    <Works />
    <Profile />
    </div>
  );
}

export default App;
