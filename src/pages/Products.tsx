import { Container, Row, Col } from "react-bootstrap";
import Product from "@components/e-commerce/Product/Product";
import { useAppDispatch,useAppSelector } from "@store/hooks";
import { actGetProducts,cleanUp } from "@store/products/productsSlice";
import { useEffect } from "react";
import { useParams } from "react-router-dom";


const Products = () => {

  const dispatch = useAppDispatch()
  const params = useParams()
  const {loading,error,records} = useAppSelector(state => state.productsSlice)

  const productsList = records.length > 0 ?
  records.map(record => {
    return <Col xs={6} key={record.id} md={3} className="d-flex justify-content-center mb-5 mt-2">
        <Product {...record} />
    </Col>
  }) :
  ''
  useEffect(() => {
    dispatch(actGetProducts(params.prefix as string))
    return () => {
      dispatch(cleanUp())
    }
  },[dispatch,params])
  return (
    <Container>
      <Row>
        {productsList}
      </Row>
    </Container>
  );
};

export default Products;