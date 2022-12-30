
import { Facebook } from '@mui/icons-material'
import Topbar from './components/TopBar/Topbar'
import Home from './pages/Home/Home'
import Single from './pages/Home/Single/Single'
import Write from './pages/Home/Write/Write'
import Login from './pages/Login/Login'
import Setting from './pages/Setting/Setting'
import Register from './pages/Register/Register'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const user = false;
  return (
    <Router>
      <Topbar></Topbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/write" element={<Write/>} />
        <Route path="/setting" element={<Setting/>} />
        <Route path="/post:postid" element={<Single/>} />
        
      </Routes>
      
    </Router>
  )
}

export default App
