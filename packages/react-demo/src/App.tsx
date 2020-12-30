import React, { useState } from "react";
import './App.css';

import {
  SenApp,
  SenButton,
  SenRow,
  SenCol,
  SenFormField,
  SenCheckbox
} from "@senna-ui/react";

function App() {
  const [buttonText, setButtonText] = useState("button text");

  return (
    <div className="App">
      <SenApp>
              <SenCheckbox label="hellop check me" />
        <SenButton
          onClick={() => setButtonText("lala" + Math.random())}
          color="secondary"
        >
          Secondary click me
          {buttonText}
        </SenButton>
        <SenRow>
          <SenCol>
            <SenFormField label={buttonText || "hello"}>
              <SenCheckbox label="hellop check me" />
            </SenFormField>
          </SenCol>
          <SenCol>asdf</SenCol>
          <SenCol>asdf</SenCol>
          <SenCol>asdf</SenCol>
          <SenCol>asdf</SenCol>
        </SenRow>
      </SenApp>
    </div>
  );
}

export default App;
