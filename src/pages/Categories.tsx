import { Container} from "react-bootstrap";
import Category from "@components/e-commerce/Category/Category";
import { useAppDispatch,useAppSelector } from "@store/hooks";
import { actGetCategories } from "@store/categories/categoriesSlice";
import { useEffect } from "react";
import Loading from "@components/feedback/loading";
import GridList from "@components/e-commerce/GridList/GridList";


const Categories = () => {
  const dispatch = useAppDispatch()
  const {loading,error,records} = useAppSelector(state => state.categoriesSlice)

  useEffect(() => {
    // if(!records){
      dispatch(actGetCategories())
    // }
  },[dispatch])

  return (
    <Container>
      <Loading loading={loading} error={error} >
        <GridList records={records} renderItem={(record) => <Category {...record} />} />
      </Loading>
    </Container>
  );
};

export default Categories;