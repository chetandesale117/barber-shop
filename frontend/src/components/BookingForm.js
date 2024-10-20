import React, { useState } from 'react';
import axios from 'axios';
import "../App.css";


const BookingForm = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const booking = { name, phone, date, time };
            await axios.post('/api/bookings', booking);
            alert('Booking successful');
        } catch (error) {
            alert('Failed to book');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div>
                <label>Phone:</label>
                <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} required />
            </div>
            <div>
                <label>Date:</label>
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
            </div>
            <div>
                <label>Time:</label>
                <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
            </div>
            <button type="submit">Book Now</button>
        </form>
    );
};

export default BookingForm;

