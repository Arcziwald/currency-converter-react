import "./style.css";

const Header = ({title}) => (
    <legend className="form__legend">
        <strong>{title}</strong>
    </legend>
);

export default Header;