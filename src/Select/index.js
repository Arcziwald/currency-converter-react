import "./style.css";

const Select = ({ selectedCurrency, onSelectChange }) => {
    return (
    <p>
        <select 
            className="form__field"
            defaultValue={selectedCurrency}
            onChange={onSelectChange}
        >
                <option>EUR</option>
                <option>CHF</option>
                <option>GBP</option>
                <option>USD</option>
        </select>
    </p>
);
    };

export default Select;