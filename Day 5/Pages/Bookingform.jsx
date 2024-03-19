import { useState } from 'react';
import '../assets/css/Bookingform.css'; // Import CSS file for styling
import Nav from './Nav';
import { useNavigate } from 'react-router-dom';

function BookingService() {
  const [customerId, setCustomerId] = useState('');
  const [submissionDate, setSubmissionDate] = useState('');
  const [description, setDescription] = useState('');
  const [serviceType, setServiceType] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your submission logic here
    console.log('Form submitted:', { customerId, submissionDate, description, serviceType });
  };
  const nav = useNavigate();
  const handleBackToDashboard = () => {
    // Add logic to navigate back to the dashboard
    nav("/UserDash")
    console.log('Navigating back to dashboard');
  };

  return (
    <>
    <Nav />
    <div className="booking-service-container-custom" style={{marginTop:55}}>
      <h2 className="booking-header-custom">Booking Service</h2>
      <form className="booking-form-custom" onSubmit={handleSubmit}>
        <div className="form-group-custom">
          <label htmlFor="customerId" className="input-label-custom">Customer ID:</label>
          <input
            type="text"
            id="customerId"
            name="customerId"
            value={customerId}
            onChange={(e) => setCustomerId(e.target.value)}
            className="input-field-custom"
            required
          />
        </div>
        <div className="form-group-custom">
          <label htmlFor="submissionDate" className="input-label-custom"  style={{marginTop:-20}}>Submission Date:</label>
          <input
            type="date"
            id="submissionDate"
            name="submissionDate"
            value={submissionDate}
            onChange={(e) => setSubmissionDate(e.target.value)}
            className="input-field-custom"
            required
          />
        </div>
        <div className="form-group-custom">
          <label htmlFor="description" className="input-label-custom" style={{marginTop:-20}}>Description:</label>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="input-field-custom"
            rows="4"
            required
          ></textarea>
        </div>
        <div className="form-group-custom">
          <label htmlFor="serviceType" className="input-label-custom" style={{marginTop:-20}}>Service Type:</label>
          <input style={{}}
            type="text"
            id="serviceType"
            name="serviceType"
            value={serviceType}
            onChange={(e) => setServiceType(e.target.value)}
            className="input-field-custom"
            required
          />
        </div>
        <button className="submit-booking-button-custom" type="submit" style={{width:200,marginLeft:70,marginTop:-20}}>Submit Booking</button>
      </form>
      <button className="back-to-dashboard-button-custom" onClick={handleBackToDashboard} style={{width:300,marginLeft:30,color:'black'}}>Back to Dashboard</button>
    </div>
    </>
  );
}

export default BookingService;
