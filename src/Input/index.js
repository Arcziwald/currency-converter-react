import "./style.css";

const Input = () => {
    
    return (
    <input  
    type="number" 
    className="form__field" 
    min="0.01" 
    step="0.01"
    autofocus
    required
    placeholder="Wpisz kwotę w zł" 
    />
);
    };
export default Input;