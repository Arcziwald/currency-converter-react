const Result = ({ result }) => (
  
    result !== undefined && (
      <>
        {result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;=
        {" "}
        <strong>
          {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
        </strong>
      </>
    )
  
);

export default Result;