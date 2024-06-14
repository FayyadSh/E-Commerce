import { Col, Row } from 'react-bootstrap';

type GridListProps <T>={
    records :T[]
    renderItem : (record:T) => React.ReactNode
}


const GridList = <T extends {id?:number}> ({records,renderItem}: GridListProps<T> ) => {

  const gridList = records.length > 0 ?
  records.map(record => {
    return (
    <Col xs={6} key={record.id} md={3} className="d-flex justify-content-center mb-5 mt-2">
        {renderItem(record)}
    </Col>
    )
  }) :
  'there is no categories'

    return (
        <Row>
            {gridList}
        </Row>
    );
}

export default GridList
