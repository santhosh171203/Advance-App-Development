import  { useState } from 'react';
import '../assets/css1/EditServiceForm.css';
import Nav from'../Pages/Nav';

function EditServiceForm() {
  const [serviceType, setServiceType] = useState('');
  const [description, setDescription] = useState('');
  const [charges, setCharges] = useState('');
  const [timings, setTimings] = useState('');

  const handleUpdate = () => {
    // Implement logic for updating service
    console.log('Service Updated');
  };

  const handleCancel = () => {
    // Implement logic for canceling update
    console.log('Update Cancelled');
  };

  return (
    <>
    <Nav/>
    <div className="service-details-box">
      <h2 style={{marginLeft:100}}>Edit Service</h2>
      <div className="input-group">
        <label htmlFor="serviceType">Service Type:</label>
        <input
          type="text"
          id="serviceType"
          value={serviceType}
          onChange={(e) => setServiceType(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          rows="4"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <div className="input-group">
        <label htmlFor="charges">Charges:</label>
        <input
          type="text"
          id="charges"
          value={charges}
          onChange={(e) => setCharges(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label htmlFor="timings">Timings:</label>
        <input
          type="text"
          id="timings"
          value={timings}
          onChange={(e) => setTimings(e.target.value)}
        />
      </div>
      <div className="button-group">
        <button  style={{width:'200px',marginRight:'20px'}}onClick={handleUpdate}>Update</button>
        <button style={{width:"200px"}} onClick={handleCancel}>Cancel</button>
      </div>
    </div>
    </>
  );
}

export default EditServiceForm;
