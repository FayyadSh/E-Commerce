import { Col, Row } from 'react-bootstrap';
import Category from "../Category/Category";

type GridListProps = {
    records : T[]
    renderItem : (record:T) => React.JSX.Element
}

type hasId = {
    id?:number
}

const GridList = <T extend hasId> ({records,renderItem}:GridListProps<T>) => {

    
  const gridList = records.length > 0 ?
  records.map(record => {
    return (
    <Col xs={6} key={record.id} md={3} className="d-flex justify-content-center mb-5 mt-2">
        {renderItem(record)}
        <Category {...record} />
    </Col>)
  }) :
  'there is no categories'

    return (
        <Row>
            {gridList}
        </Row>
    );
}

export default GridList;
