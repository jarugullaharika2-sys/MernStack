import { useParams, useNavigate }  from 'react-router-dom'; 
const studentData = [  
    { id: 1, name: 'Harika', course: 'Bsc',    email: 'harika@gmail.com' },  
    { id: 2, name: 'Sushma', course: 'BSc',    email: 'sushma@gmail.com' },  
    { id: 3, name: 'Bhagya', course: 'MCA',    email: 'bhagya@gmail.com' }, 
]; 
export default function StudentDetail() {  
    const { id } = useParams();  
    const navigate = useNavigate();  
    const student = studentData.find(    
        (s) => s.id === parseInt(id)  
    );  
    if (!student) return <h2>Student Not Found</h2>;  
    return (    
    <div style={{ padding:'20px' }}>      
    <h2>Student Detail</h2>      
    <p><strong>Name:</strong> {student.name}</p>      
    <p><strong>Course:</strong> {student.course}</p>      
    <p><strong>Email:</strong> {student.email}</p>      
    <button onClick={() => navigate('/students')}>        
        Back to List      
        </button>    
        </div>  
        );
     }