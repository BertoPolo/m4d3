import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import books from "./horror.json"
import { Row } from "react-bootstrap"
import Warning from "./components/Warning"
import MyBadge from "./components/MyBadge.jsx"
import SingleBook from "./components/SingleBook.jsx"
import BookList from "./components/BookList.jsx"

function App() {
  return (
    <div className="App">
      <Warning color={"danger"} message={"hello "} />
      <MyBadge color={"info"} message={"hello my darling "} />
      <Row>
        <SingleBook data={books[5]} />
      </Row>
      <Row>
        <BookList data={books} />
      </Row>
    </div>
  )
}

export default App
