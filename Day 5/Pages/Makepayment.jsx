import { useState } from 'react';
import '../assets/css/Makepayment.css';
import Nav from './Nav';

function MakePayment() {
  const [customerId, setCustomerId] = useState('');
  const [totalAmount, setTotalAmount] = useState('');
  const [bookingId, setBookingId] = useState('');
  const [modeOfPayment, setModeOfPayment] = useState('');
  const [paymentDate, setPaymentDate] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleConfirmPayment = () => {
    setShowConfirmation(true);
  };

  const handleYesConfirmation = () => {
    // Add logic to confirm payment
    console.log('Payment confirmed');
    setShowConfirmation(false);
  };

  const handleNoConfirmation = () => {
    setShowConfirmation(false);
  };

  return (
    <>
    <Nav/>
    <div className="make-payment-container">
      <h2>Make Payment</h2>
      <div className="payment-form">
        <div className="form-group">
          <label htmlFor="customerId">Customer ID:</label>
          <input
            type="text"
            id="customerId"
            value={customerId}
            onChange={(e) => setCustomerId(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="totalAmount" style={{marginTop:5}}>Total Amount:</label>
          <input
            type="text"
            id="totalAmount"
            value={totalAmount}
            onChange={(e) => setTotalAmount(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="bookingId" style={{marginTop:5}}>Booking ID:</label>
          <input
            type="text"
            id="bookingId"
            value={bookingId}
            onChange={(e) => setBookingId(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="modeOfPayment" style={{marginTop:5 }}>Mode of Payment:</label>
          <input
            type="text"
            id="modeOfPayment"
            value={modeOfPayment}
            onChange={(e) => setModeOfPayment(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="paymentDate" style={{marginTop:5}}>Payment Date:</label>
          <input
            type="date"
            id="paymentDate"
            value={paymentDate}
            onChange={(e) => setPaymentDate(e.target.value)}
            required
          />
        </div>
        <button className="confirm-payment-button"  style={{marginTop:5,width:200,marginLeft:110}}onClick={handleConfirmPayment} >Confirm Payment</button>
      </div>
      {showConfirmation && (
        <div className="confirmation-modal">
          <p>Are you sure you want to confirm this payment?</p>
          <div className="confirmation-buttons">
            <button onClick={handleYesConfirmation}>Yes</button>
            <button onClick={handleNoConfirmation}>No</button>
          </div>
        </div>
      )}
    </div>
    </>
  );
}

export default MakePayment;
