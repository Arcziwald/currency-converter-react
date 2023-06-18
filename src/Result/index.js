const Result = (rate, amount, currency) => {
  const result = `${amount.toFixed(2)} PLN = ${rate.toFixed(2)} ${currency}`;
  setResult(result);
};

export default Result;