import React from 'react';
import '../App.css';
import Feature from './Feature';
import { FaCut, FaChair, FaClock } from 'react-icons/fa';

const Welcome = () => {
  return (<>
  
  <div className='welcome'>
        <h1>Welcome To My Shop</h1>
    </div>
    <div className="App">
      <h2>Our Features</h2>
      <div className="features">
        <Feature 
          icon={<FaCut />} 
          title="Professional Haircuts" 
          description="Get a fresh look with our skilled barbers." 
        />
        <Feature 
          icon={<FaChair />} 
          title="Comfortable Seats" 
          description="Relax in our premium seating while you wait." 
        />
        <Feature 
          icon={<FaClock />} 
          title="Quick Service" 
          description="Get in and out quickly with our efficient service." 
        />
      </div>
    </div>

  </>
    )
}

export default Welcome;
