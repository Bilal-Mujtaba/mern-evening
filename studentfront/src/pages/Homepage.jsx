import { useEffect, useState } from "react";
import { getAllStudents } from "../api/studentapi";
import StudentCard from "../components/StudentCard";
import { Col, Row } from "react-bootstrap";

const Homepage = () => {
    //hook to get all students data
    const [students, setStudents] = useState([]);
    //hook for setting loading state
    const [loading, setLoading] = useState(false);
    //state for handling the errors
    const [error, setError] = useState(null);

    //function to fetch all students data from database
    const fetchStudents = async () => {
        try{
            setLoading(true);
            setError(null);
            const data = await getAllStudents();
            setStudents(data.data)
        }catch(error){
            setError(error);
        }finally{
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchStudents();
    },[])

    //state for getting the students data automatically
    return(
<div>
    <h1>All Student Data</h1>
    <Row xs={1} md={2} lg={3}>
    {
       
        students.map(s => (
            <Col>
            <StudentCard student={s}/>
            </Col>
        ))}
        </Row>
   
</div>
    )
}
export default Homepage;