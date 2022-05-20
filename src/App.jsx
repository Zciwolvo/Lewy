import "./App.css";
import React, { useState } from "react";
import Main from "./pages/main";
import Loading from "./pages/loading";
import Final from "./pages/final";
import Peppo from "./pages/peppohappy";

function App() {
  const [Progress, setProgress] = useState(0);
  const [steps, setSteps] = useState(true);
  const [step2, setStep2] = useState(true);
  const [step3, setStep3] = useState(true);
  return (
    <div className="App">
      <Main
        setProgress={setProgress}
        Progress={Progress}
        steps={steps}
        setSteps={setSteps}
        setStep2={setStep2}
      />
      <Loading Progress={Progress} steps={steps} setSteps={setSteps} />
      <Final step2={step2} setStep3={setStep3} />
      {step3 ? <></> : <Peppo />}
    </div>
  );
}

export default App;
