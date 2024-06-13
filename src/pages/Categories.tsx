import { Container, Row, Col } from "react-bootstrap";
import Category from "@components/e-commerce/Category/Category";
import { useAppDispatch,useAppSelector } from "@store/hooks";
import { actGetCategories } from "@store/categories/categoriesSlice";
import { useEffect } from "react";

const Categories = () => {
  const dispatch = useAppDispatch()
  const {loading,error,records} = useAppSelector(state => state.categoriesSlice)

  useEffect(() => {
    dispatch(actGetCategories())
  },[dispatch])

  const categoriesList = records.length > 0 ?
    records.map(record => {
      return <Col xs={6} key={record.id} md={3} className="d-flex justify-content-center mb-5 mt-2">
          <Category {...record} />
      </Col>
    }) :
    'there is no categories'
  return (
    <Container>
      <Row>
        {categoriesList}
      </Row>
    </Container>
  );
};

export default Categories;