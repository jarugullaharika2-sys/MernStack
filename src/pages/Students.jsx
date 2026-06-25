import { Link } from 'react-router-dom'; 
const studentData = [  
    { id: 1, name: 'Harika', course: 'Bsc' },  
    { id: 2, name: 'Sushma', course: 'BSc' },  
    { id: 3, name: 'Bhagya', course: 'MCA' }, 
]; 
export default function Students() {  
    return (    
    <div style={{ padding:'20px' }}>      
    <h2>Student List</h2>      
    {studentData.map((s) => (        
        <div key={s.id}>          
        <Link to={`/students/${s.id}`}>            
        {s.name} – {s.course}          
        </Link>        
        </div>      
        ))}    
        </div>  
        ); 
    }