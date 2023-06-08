const Container = ({ children, onFormSubmit }) => {
    <form className="container" onSubmit={onFormSubmit}>
        {children}
    </form>
};

    
export default Container;