

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost';
import Profile from './components/Profile';


function App() {
  return (
   <Router>
    <Navbar />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path='/blogs' element={<BlogList />}></Route>
    <Route path="/blogs/:id" element={<BlogPost />} />
    <Route path="/profile" element={<Profile />} />
     
    </Routes>
   </Router>
  );
}

export default App;
