import '../assets/css/UserDash.css'; // Import CSS file
import Nav from './Nav';
import Lottie from 'lottie-react';
import ani3 from '../assets/animation/ani3.json';
import { useNavigate } from 'react-router-dom';

function UserDashboard() {
  const nav = useNavigate();
  const handleViewServices = () =>{
      nav("/Viewser1");
  }
  const handleBookService = () =>{
    nav("/Bookingform")
  }
  const handleMyBookings = () => {
    nav("/Mybookings")
  }
  return (
    <>
      <Nav />
      <div className="dashboard-container">
        <Lottie animationData={ani3} style={{ height: '500px', width: '500px' }} />
        <div className="user-dashboard">
          <div className="dashboard-box">
            <div className="dashboard-buttons">
              <button className="view-services-button" onClick={() => handleViewServices()}>View Services</button>
              <button className="book-service-button" onClick={() => handleBookService()}>Book Service</button>
              <button className="my-bookings-button" onClick={() => handleMyBookings()}>My Bookings</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}




export default UserDashboard;
