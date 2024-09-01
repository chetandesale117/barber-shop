import './App.css';
import BookingForm from './components/BookingForm';
import Nav from "./components/Nav";
import Rate from './components/Rate';
import Welcome from './components/Welcome';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';


function App() {
  return (
    <>
    <Nav/>
    <Welcome/>
    <Rate/>
    <Router>
      <Routes>
        <Nav/>
        <Route path='/booking' element={<BookingForm/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
