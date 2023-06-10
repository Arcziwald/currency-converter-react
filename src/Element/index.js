import "./element.css";

const Element = ({children}) => {
  return(
     <div className="element">
        {children}
    </div>
  );
};

export default Element;