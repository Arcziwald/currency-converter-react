import "./style.css";

const Form = ({ children, onFormSubmit }) => {
    <form className="form" onSubmit={onFormSubmit}>
        {children}
    </form>
};

    
export default Form;