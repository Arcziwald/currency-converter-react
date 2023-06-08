import "./style.css";

const Input = () => (
    <input  
    type="number" 
    className="form__field" 
    min="0.01" 
    step="0.01" a
    utofocus
    required
    placeholder="Wpisz kwotę w zł" 
    />
);

export default Input;