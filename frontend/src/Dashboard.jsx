import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
function Dashboard()
{
  const navigate=useNavigate();
  function handleLogout() {
  sessionStorage.removeItem("userId");
  sessionStorage.removeItem("username");
  navigate("/");
}
    return(
      <>
        <h1 style={{textAlign:"center"}}>Menu</h1>
        <div className='menu'>
        
      <nav>
        <Link to="/dashboard/viewpass" style={{textDecoration:"none"}}>View Password</Link> <br />
        <Link to="/dashboard/addpass" style={{textDecoration:"none"}}>Add Password</Link> <br />
        <Link to="/dashboard/revalidatepass" style={{textDecoration:"none"}}>Revalidate Password</Link> <br />
      </nav>
     
    </div>
    <div className='Logout'>
      <button onClick={handleLogout} style={{backgroundColor:"red"}}>Logout</button>
    </div>
     
    </>
    )
}
export default Dashboard;