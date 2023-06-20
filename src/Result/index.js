const Result = ({ resultText }) => (
 
    <div>
      <h3>Result:</h3>
    {resultText.setResultText !== undefined && (
      <>
        {resultText.setAmount.toFixed(2)} {resultText.inputCurrency} = {" "}
        <strong>
          {resultText.setResultText.toFixed(2)} {resultText.outputCurrency}
        </strong>
      </>
    )}
  </div>
  );


export default Result;