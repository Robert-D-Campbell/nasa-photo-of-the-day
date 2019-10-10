import React from "react";

import "./App.css";
import PicOfTheDay from "./components/potd/PicOfTheDay";
import RoverGrid from "./components/library/RoverGrid";

function App() {
  return (
    <div className="App">
      <PicOfTheDay />
      <RoverGrid />
    </div>
  );
}

export default App;
