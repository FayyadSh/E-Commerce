import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <Container className="notFound">
            <h1>404</h1>
            <p>Page not found</p>
            <Link replace={true} to='/'>Back To Home</Link>
        </Container>
    );
}

export default Error;
