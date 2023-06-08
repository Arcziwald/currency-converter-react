import "./style.css";

const Container = ({children}) => {
    return (
        <container className="container">
            {children}
        </container>
        );
    };
    
export default Container;