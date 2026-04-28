import { Badge, Button, Card } from "react-bootstrap";
const StudentCard = ({ student }) => {
    return(
        <Card style={{ width: '18rem' }}>
        <Card.Body>
        <Card.Title>{student.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{student.email}</Card.Subtitle>
        <Card.Text>
         <div><strong>Course: </strong>{student.course}</div>
         <div><strong>Course: </strong>{student.city}</div>
         <div><strong>Marks: </strong><Badge>{student.marks}</Badge></div>
        </Card.Text>
      </Card.Body>

      <Card.Footer>
        <Button variant="success">Edit</Button>{' '}
        <Button variant="danger">Delete</Button>
      </Card.Footer>
    </Card>
    )
}
export default StudentCard;