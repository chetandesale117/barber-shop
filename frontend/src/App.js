import './App.css';
import BookingForm from './components/BookingForm';
import Nav from "./components/Nav";
import Rate from './components/Rate';
import Welcome from './components/Welcome';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './components/Contact';
import Login from './components/Login';


function App() {
  return (
    <Router>
      <Nav/>
      <Routes>
        <Route path="/home" element={<Welcome />} />
        <Route path="/about" element={<Rate />} />
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/booking' element={<BookingForm />} />
        <Route path='/login' element={<Login/>}/>
      </Routes>
      
      <Footer/>
    </Router>
  );
}

export default App;
