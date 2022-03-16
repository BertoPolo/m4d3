import { Alert } from "react-bootstrap"

const Warning = ({ color, message }) => {
  return <Alert variant={color}>{message}</Alert>
}

export default Warning
