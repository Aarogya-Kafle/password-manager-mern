import { Route, Routes } from "react-router-dom"
import Login from "./Login"
import Register from "./Register"
import Dashboard from "./Dashboard"
import ViewPassword from "./ViewPassword"
import AddPassword from "./AddPassword"
import RevalidatePass from "./RevalidatePass"
import Home from './Home.jsx'
function App() {
 
  return (
   <Routes>
      {/* <Route path='/' element={<Home/>}/> */}
    <Route path='/' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>
<Route path="/dashboard/viewpass" element={<ViewPassword />} />
<Route path="/dashboard/addpass" element={<AddPassword />} />
<Route path="/dashboard/revalidatepass" element={<RevalidatePass />} />
   </Routes>
   )
}
    
export default App
