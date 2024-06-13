import { Badge,Nav,Navbar} from "react-bootstrap";
import styles from "./styles.module.css";
import Container from "react-bootstrap/Container";
import HeaderBasket from "../../e-commerce/HeaderBasket/HeaderBasket";
const { headerContainer, headerLogo } = styles


const Header = () => {
  return (
    <header>
      <div className={headerContainer}>
        <h1 className={headerLogo}>
          <span>Our</span>{' '}
          <Badge bg="info">Ecom</Badge>
        </h1>
        <HeaderBasket />
      </div>

      <Navbar expand="lg" className="bg-body-tertiary" bg='dark' data-bs-theme='dark'>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Categries</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
            </Nav>
            <Nav >
              <Nav.Link href="#home">Login</Nav.Link>
              <Nav.Link href="#link">Regiester</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
