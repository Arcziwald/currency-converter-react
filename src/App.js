import Form from "./Form";
import Result from "./Result";
import { currencies } from "./Form/currencies";
import "./index.css";
import { useState } from "react";

function App() {
  const [result, setResult] = useState();
  const calculateRate = (currency, amount) => {
    const rate = currencies.find(({ code }) => code === currency).rate;

    setResult({
      sourceAmount: +amount,
      targetAmount: amount / rate,
      currency,
    });
  };
  

  return (
    <>
      <Form calculateRate={calculateRate} />
      <Result result={result} />
    </>
  );
}

export default App;
