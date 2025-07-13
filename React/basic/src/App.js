// App.js
import Welcome from './Welcome';
import Counter from './Counter';
import React from "react";
import InputText from "./InputText";
// eslint-disable-next-line no-unused-vars
import CheckBoxExample from " ./CheckBoxExample";   
function App() {
  return (
    <>
    <div>
      <Welcome name="Anowar" />
      <Welcome name="Alo" />
    </div>
    <div>
      <h1>React State Example</h1>
      <Counter /> 
    </div>
      <div>
      <h1>React Input + State Example</h1>
      <InputText />
    </div>
    <div>
      <h1>React checkbox</h1>
      <CheckBoxExample/>
    </div>
 </>
  );
 
}

export default App;
