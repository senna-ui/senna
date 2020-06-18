import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  SenApp,
  SenButton,
  SenContainer,
  SenRow,
  SenCol,
  SenFormField,
} from "@senna-ui/react";

function App() {
  const [buttonText, setButtonText] = useState("button text");

  return (
    <div className="App" style={{ padding: "20px" }}>
      <SenApp>
        <SenButton
          onClick={() => setButtonText("lala" + Math.random())}
          color="secondary"
        >
          Secondary click me
          {buttonText}
        </SenButton>
        <SenContainer>
          <SenRow>
            <SenCol>
              <SenFormField label={buttonText || "hello"}>
                {buttonText}
              </SenFormField>
            </SenCol>
            <SenCol>asdf</SenCol>
            <SenCol>asdf</SenCol>
            <SenCol>asdf</SenCol>
            <SenCol>asdf</SenCol>
          </SenRow>
        </SenContainer>
      </SenApp>
    </div>
  );
}

export default App;
