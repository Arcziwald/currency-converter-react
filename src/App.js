import Form from "./Form";

function App({ result, calculateRate }) {
  return (
    <>
      <Form result={result} calculateRate={calculateRate} />
    </>
  );
}

export default App;
