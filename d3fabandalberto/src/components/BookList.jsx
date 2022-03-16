// import SingleBook from "./SingleBook"
import { Component } from "react"
import { Form } from "react-bootstrap"

class BookList extends Component {
  state = {
    searchQuery: "",
  }

  handleChange = (value) => {
    this.setState({
      searchQuery: value,
    })
  }

  render() {
    return (
      <Form>
        <Form.Label>Filter</Form.Label>
        <Form.Control type="text " placeholder="Which book do you want?" />
      </Form>
    )
  }
}
export default BookList

/* data.map((book) => {
  return <SingleBook data={book} /> 
   })
  */
// const inputFilter data.filter().
