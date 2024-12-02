import React, { useEffect, useState } from "react";
import axios from "axios";

function BookingList() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      const response = await axios.get("http://localhost:5000/api/bookings");
      setBookings(response.data);
    };
    fetchBookings();
  }, []);

  return (
    <div>
      <h2>All Bookings</h2>
      <ul>
        {bookings.map((booking) => (
          <li key={booking._id}>
           <p>Name of customer :- {booking.name}</p>  <br/> <p>Name of Service :- {booking.service} </p><br/>
           <p>Date :-{new Date(booking.date).toDateString()} </p>           
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookingList;
