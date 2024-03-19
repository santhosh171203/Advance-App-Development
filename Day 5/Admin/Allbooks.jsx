import { useNavigate } from 'react-router-dom';
import '../assets/css1/AllBookings.css';
import Nav from '../Pages/Nav';

function Allbooks() {
  // Dummy data for bookings (replace with your actual data)
  const bookings = [
    {
      bookingId: 1,
      userId: 101,
      userName: 'John Doe',
      submissionDate: '2024-03-22',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      status: 'completed'
    },
    {
      bookingId: 2,
      userId: 102,
      userName: 'Jane Doe',
      submissionDate: '2024-03-23',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      status: 'pending'
    }
    // Add more booking objects as needed
  ];

  const nav = useNavigate();

  const handleBack = () => {
    nav("/Admindash")
  }

  return (
    <>
      <Nav />
      <div className="all-bookings-container-custom">
        <h2 className="all-bookings-header-custom">View Bookings</h2>
        <button style={{width:200,marginLeft:550,marginTop:5}} onClick={handleBack} className="back-to-dashboard-button-custom">Back to Dashboard</button>
        <div className="bookings-table-custom">
          <table>
            <thead>
              <tr>
                <th>Booking Id</th>
                <th>User Id</th>
                <th>User Name</th>
                <th>Submission Date</th>
                <th>Description</th>
                <th>Booking Status</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map(booking => (
                <tr key={booking.bookingId}>
                  <td>{booking.bookingId}</td>
                  <td>{booking.userId}</td>
                  <td>{booking.userName}</td>
                  <td>{booking.submissionDate}</td>
                  <td>{booking.description}</td>
                  <td>{booking.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Allbooks;
