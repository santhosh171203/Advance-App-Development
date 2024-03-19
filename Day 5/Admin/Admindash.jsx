
import { useNavigate } from 'react-router-dom';
import '../assets/css1/Admindash.css' ;// Import CSS file for styling
import Nav from '../Pages/Nav';

function AdminDashboard() {
    const nav = useNavigate();
  const handleAddService = () => {
    // Add logic for handling Add Service button click
    nav("/Addservice")
    console.log('Add Service button clicked');
  };

  const handleViewService = () => {
    // Add logic for handling View Service button click
    nav("/Viewservices1")
    console.log('View Service button clicked');
  };

  const handleAllBooking = () => {
    // Add logic for handling All Booking button click
    nav("/Allbooks")
    console.log('All Booking button clicked');
  };

  const handlePaymentHistory = () => {
    // Add logic for handling Payment History button click
    nav("/PayHistory");
    console.log('Payment History button clicked');
  };

  return (
    <>
    <Nav/>
    <div className="admin-dashboard-container">
      <div className="box" onClick={handleAddService}>
        <h3>Add Service</h3>
      </div>
      <div className="box" onClick={handleViewService}>
        <h3>View Service</h3>
      </div>
      <div className="box" onClick={handleAllBooking}>
        <h3>All Booking</h3>
      </div>
      <div className="box" onClick={handlePaymentHistory}>
        <h3>Payment History</h3>
      </div>
    </div>
    </>
  );
}

export default AdminDashboard;
