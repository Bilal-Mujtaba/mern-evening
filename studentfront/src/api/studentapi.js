import axios from 'axios';

//function to do the initial setup
const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: { 'Content-Type': 'application/json' }
})

//getting the API that is fetching all students data from database
export const getAllStudents = async() => (await api.get('/api/student/allstudents')).data

//getting the API for single student
export const getStudentById = async(id) => (await api.get(`/api/student/getstudent/${id}`)).data

//getting API to add student data to database
export const addStudent = async(data) => (await api.post('/api/student/addstudent',data)).data;

//getting API to update the data
export const updateStudent = async(id,data) => (await api.put(`/api/student/update/${id}`,data)).data

//getting API to delete the single student data
export const deleteStudent = async(id) => (await api.delete(`/api/student/delete/${id}`)).data
