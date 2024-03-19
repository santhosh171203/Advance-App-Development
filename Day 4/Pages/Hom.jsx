import '../assets/css/Hom.css';

const Hom = () => {
  return (
    <div className="home-page">
      <header>
        <h1>Welcome to Home Care Services for Seniors</h1>
        <p>Explore our range of services tailored for senior citizens.</p>
      </header>
      <section className="services">
        <h2>Our Services</h2>
        <div className="service-item">
          <h3>Assisted Living</h3>
          <p>Personalized care plans to support seniors in their daily activities.</p>
        </div>
        <div className="service-item">
          <h3>Medical Assistance</h3>
          <p>Professional medical assistance and monitoring for seniors health needs.</p>
        </div>
        <div className="service-item">
          <h3>Companionship</h3>
          <p>Engaging companionship services to prevent loneliness and promote well-being.</p>
        </div>
      </section>
      <footer>
        <p>Contact us to learn more about our services.</p>
      </footer>
    </div>
  );
}

export default Hom;