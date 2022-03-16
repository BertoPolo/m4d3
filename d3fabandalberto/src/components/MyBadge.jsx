import { Badge } from "react-bootstrap"

const MyBadge = ({ color, message }) => {
  return <Badge variant={color}>{message}</Badge>
}
export default MyBadge
