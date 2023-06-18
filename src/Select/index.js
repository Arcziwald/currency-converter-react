import "./style.css";

const Select = ({ currency, setCurrency }) => {
    return (
    <p>
        <select 
            className="form__field"
            value={currency}
            onChange={(event) => setCurrency(event.target.value)}
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