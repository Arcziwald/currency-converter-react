import "./style.css";

const Select = () => {
    return (
    <p>
        <select 
            className="form__field">
                <option>EUR</option>
                <option>CHF</option>
                <option>GBP</option>
                <option>USD</option>
        </select>
    </p>
);
    };

export default Select;