import { HashRouter  as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import NavBar from "./components/NavBar"
import Home from './Home'
import Works from './Works'
import ContactMe from './ContactMe';

function App() {
  return (
    <div id = "app-div">
       <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/works" element={<Works />} />
          <Route path='/ContactMe' element={<ContactMe/>}/>
          </Routes>
        </Router>
    </div>
    
  );
}

export default App
