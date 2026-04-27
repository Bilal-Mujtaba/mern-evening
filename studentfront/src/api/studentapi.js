import axios from 'axios';

//function to do the initial setup
const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: { 'Content-Type': 'application/json' }
})

//getting the API that is fetching all students data from database
export const getAllStudents = async() => (await api.get('/students/allstudents')).data