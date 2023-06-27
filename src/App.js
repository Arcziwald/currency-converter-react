import Form from "./Form";
import "./index.css";

function App({ result, calculateRate }) {
  return (
    <>
      <Form result={result} calculateRate={calculateRate} />
    </>
  );
}

export default App;
