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
      <div style={{position:'absolute',left:'15%',top:'-%'}} className="container-custom">
        <div className="view-service-custom">
          <div className="search-box-custom">
            <input type="text" placeholder="Search..." style={{marginLeft:100,width:300}} />
            <button onClick={handleSearch} style={{width:100,marginRight:-500}}>Search</button>
          </div>
          <div className="details-box-custom">
            <h2 style={{marginLeft:180}}>Service Details</h2>
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
        <button className="back-to-dashboard-button-custom" onClick={handleBack} style={{width :200,marginLeft:250,marginTop: 50}}>Back to Dashboard</button>
      </div>
    </>
  );
}

function handleSearch() {
  // Implement search functionality
  console.log('Searching...');
}

export default ViewService;
