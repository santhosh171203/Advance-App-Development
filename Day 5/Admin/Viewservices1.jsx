
import { useNavigate } from 'react-router-dom';
import '../assets/css1/Viewservices1.css'; // Import CSS file for styling
import Nav from '../Pages/Nav';

function Viewservices1() {
  const handleDelete = () => {
    const confirmDelete = window.confirm('Are you sure you want to delete this service?');
    if (confirmDelete) {
      // Implement logic for deleting service
      console.log('Service deleted');
    }
  };
  const nav = useNavigate();
const handleBack =() =>{
  nav("/Admindash");
}
const handleEdit = () =>{
  nav("/EditServiceForm")
}
  return (
    <><Nav/>
    <div className="view-services-container1" ><div className='reegan1'>
      View Services
    </div>
      <div className="search-box1" >
        <input type="text" placeholder="Search service..." style={{width:300 }} />
        <button style={{width:200 ,marginLeft:0}}>Search</button>
      </div>
      <div className="service-details1" style={{marginLeft:20}}>
        <div>
          <label>Service ID:</label>
          <span style={{marginleft:90}}>1</span>
        </div>
        <div>
          <label>Service Type:</label>
          <span>AC Service</span>
        </div>
        <div>
          <label>Description:</label>
          <span>All types of AC service</span>
        </div>
        <div>
          <label>Charges:</label>
          <span>$1253</span>
        </div>
        <div>
          <label>Timing:</label>
          <span>8 am to 10 pm</span>
        </div>
        <div className="buttons1">
          <button  onClick={handleEdit}>Edit</button>
          <button  onClick={handleDelete}>Delete</button>
        </div>
      </div>
      <button  style ={{width:300,marginLeft:140}}onClick={handleBack} className="back-to-dashboard-button1">Back to Dashboard</button>
    </div>
    </>
  );
}

export default Viewservices1;
