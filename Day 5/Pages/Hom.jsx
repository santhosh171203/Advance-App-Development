
import '../assets/css/Hom.css'; // Import the CSS file for styling

function HomePage() {
  return (
    <div className="home-page">
      <header className="header">
        <h1>Welcome to SeniorCare Home Services</h1>
        <p>We provide compassionate and reliable home care services for seniors</p>
      </header>
      <section className="services">
        <h2>Our Services</h2>
        <div className="service-card">
          <h3>Personal Care</h3>
          <p>Assistance with bathing, grooming, dressing, and personal hygiene.</p>
        </div>
        <div className="service-card">
          <h3>Companionship</h3>
          <p>Engaging in conversation, accompanying on walks, reading books, and playing games.</p>
        </div>
        <div className="service-card">
          <h3>Medication Management</h3>
          <p>Assistance with medication reminders and organizing prescriptions.</p>
        </div>
        <div className="service-card">
          <h3>Meal Preparation</h3>
          <p>Planning and cooking nutritious meals according to dietary needs and preferences.</p>
        </div>
        <div className="service-card">
          <h3>Housekeeping</h3>
          <p>Light housekeeping tasks including laundry, vacuuming, and tidying up.</p>
        </div>
      </section>
      <section className="contact" style={{}}>
        
      </section>
      <footer className="footer" style={{marginTop:250,width:1500}}>
        <p style={{marginTop:0}}>&copy; 2024 SeniorCare Home Services</p>
      </footer>
    </div>
  );
}

export default HomePage;
