import { Card, Button, Col } from "react-bootstrap"

const SingleBook = ({ data }) => {
  return (
    <Col>
      <Card style={{ width: "13rem" }}>
        <Card.Img variant="top" src={data.img} />
        <Card.Body>
          <Card.Title>{data.title}</Card.Title>
          <Card.Text>price : {data.price}</Card.Text>
          <Button variant="primary">Buy it!</Button>
        </Card.Body>
      </Card>
    </Col>
  )
}
export default SingleBook
