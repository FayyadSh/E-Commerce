import { Container } from "react-bootstrap";
import styles from './/styles.module.css'
import Header from "@components/common/Header/Header";
import Footer from "@components/common/Footer/Footer";

const {container,wrapper} = styles
const MainLayout = () => {
    return (
        <Container className={container}>
            <div className={wrapper}>
                <Header/>
                <Footer />
            </div>
        </Container>
    );
}

export default MainLayout;
