import Nav from './Nav';
import '../assets/css/Viewser.css'; // Import CSS file for styling
import { useNavigate } from 'react-router-dom';

function ViewService() {
    const nav = useNavigate();
    const handleBack = () =>{
        nav("/UserDash")
    }
  return (
    <>
      <Nav />
      <div className="container-custom">
        <div className="view-service-custom">
          <div className="search-box-custom">
            <input type="text" placeholder="Search..." />
            <button onClick={handleSearch}>Search</button>
          </div>
          <div className="details-box-custom">
            <h2>Service Details</h2>
            <div className="details-custom">
              <div>
                <label>Service ID:</label>
                <span>1</span>
              </div>
              <div>
                <label>Service Type:</label>
                <span>AC Service</span>
              </div>
              <div>
                <label>Description:</label>
                <span>All type of AC</span>
              </div>
              <div>
                <label>Charges:</label>
                <span>$130</span>
              </div>
              <div>
                <label>Timings:</label>
                <span>5am to 9pm</span>
              </div>
            </div>
          </div>
        </div>
        <button className="back-to-dashboard-button-custom" onClick={handleBack}>Back to Dashboard</button>
      </div>
    </>
  );
}

function handleSearch() {
  // Implement search functionality
  console.log('Searching...');
}

export default ViewService;
