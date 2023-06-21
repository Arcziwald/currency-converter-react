const Result = ({ result }) => (
  <div>
    <h3>Result:</h3>
    {result.setResult !== undefined && (
      <>
        {result.amount.toFixed(2)} {result.inputCurrency} = {" "}
        <strong>
        {result.rate.toFixed(2)} {result.outputCurrency}
        </strong>
      </>
    )}
  </div>
);

export default Result;
