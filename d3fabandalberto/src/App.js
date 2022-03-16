import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Warning from "./components/Warning"
import MyBadge from "./components/MyBadge.jsx"
import SingleBook from "./components/SingleBook.jsx"

function App() {
  return (
    <div className="App">
      <Warning color={"danger"} message={"hello "} />
      <MyBadge color={"info"} message={"hello my darling "} />
    </div>
  )
}

export default App
