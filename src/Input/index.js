import "./style.css";

const Input = (amount, setAmount) => {
  return (
    <input
      type="number"
      className="form__field"
      min="0.01"
      step="0.01"
      autoFocus
      required
      placeholder="Wpisz kwotę w zł"
      value={amount}
      onChange= {(event) => setAmount(event.target.value)}
    />
  );
};
export default Input;
