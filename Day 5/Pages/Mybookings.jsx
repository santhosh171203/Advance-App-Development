import Nav from './Nav';
import '../assets/css/Mybookings.css';
import { useNavigate } from 'react-router-dom';

function MyBookings() {
  // Sample data for bookings
  const bookings = [
    {
      id: 1,
      serviceType: 'Service A',
      timing: '10:00 AM - 12:00 PM',
      description: 'Lorem ipsum dolor sit amet',
      serviceCost: '$100',
      submissionDate: '2024-03-20',
      bookingStatus: 'Pending',
    },
    {
      id: 2,
      serviceType: 'Service B',
      timing: '2:00 PM - 4:00 PM',
      description: 'Sed do eiusmod tempor.',
      serviceCost: '$150',
      submissionDate: '2024-03-22',
      bookingStatus: 'Confirmed',
    },
    // Add more bookings as needed
  ];

  const handleDelete = (bookingId) => {
    // Show confirmation dialog
    const confirmDelete = window.confirm('Are you sure you want to delete this booking?');

    // Check if user confirms deletion
    if (confirmDelete) {
      // Logic to delete booking with bookingId
      console.log(`Deleting booking with ID ${bookingId}`);
    }
  };
  const nav = useNavigate();

  const handleMakePayment = (bookingId) => {
    // Logic to make payment for booking with bookingId
    nav("/Makepayment")
    console.log(`Making payment for booking with ID ${bookingId}`);
  };

  return (
    <>
      <Nav />
      <div className='my-bookings-container-custom'>
        <h2>My Bookings</h2>
        <table>
          <thead>
            <tr>
              <th>Booking ID</th>
              <th>Service Type</th>
              <th>Timing</th>
              <th>Description</th>
              <th>Service Cost</th>
              <th>Submission Date</th>
              <th>Booking Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.id}>
                <td>{booking.id}</td>
                <td>{booking.serviceType}</td>
                <td>{booking.timing}</td>
                <td>{booking.description}</td>
                <td>{booking.serviceCost}</td>
                <td>{booking.submissionDate}</td>
                <td>{booking.bookingStatus}</td>
                <td>
                  <div className='action-buttons-custom'>
                    <button onClick={() => handleDelete(booking.id)}>Delete</button>
                    <button onClick={() => handleMakePayment()}>Make Payment</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default MyBookings;
