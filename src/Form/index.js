import "./style.css";

const Form = ({children}) => {
  return (
    <form className="form">
        {children}
    </form>
  );
};
    
export default Form;