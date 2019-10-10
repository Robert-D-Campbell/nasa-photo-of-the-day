import React from "react";
import styled, { createGlobalStyle } from "styled-components";

import PicOfTheDay from "./components/potd/PicOfTheDay";
import RoverGrid from "./components/library/RoverGrid";

function App() {
  return (
    <AppStyles className="App">
      <GlobalStyle />
      <PicOfTheDay />
      <h1>Latest photos Mars Rover API</h1>
      <RoverGrid />
    </AppStyles>
  );
}

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}
body {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  }
img {
  max-width: 100%;
  box-shadow: 3px 3px 3px #03204B;
  border-radius: 8px;
}
`;

const AppStyles = styled.div`
  background: #04396c;
  h1 {
    background: #04396c;
    color: #b3cde0;
    margin: 5% auto;
    padding: 3%;
    text-align: center;
    font-size: 2.8rem;
    border-bottom: 1px solid #b3cde0;
    width: 1000px;
  }
`;

export default App;
