import "./label.css";

const Label = ({ text, children }) => {
  return (
    <span className="form__labelText">
      {text}
      {children}
    </span>
  );
};

export default Label;
