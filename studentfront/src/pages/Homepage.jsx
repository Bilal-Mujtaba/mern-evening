import { useState } from "react";

const Homepage = () => {
    //hook to get all students data
    const [students, setStudents] = useState([]);
    //hook for setting loading state
    const [loading, setLoading] = useState(false);
    //state for handling the errors
    const [error, setError] = useState(null);

    //state for getting the students data automatically
    return(
<div>
    <h1>Homepage</h1>
</div>
    )
}
export default Homepage;