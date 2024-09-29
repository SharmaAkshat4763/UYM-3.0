import React, { useState } from 'react';
import '../styles/register.css';
import logo from '../assets/logo.png'; 

function Register() {
  const [step, setStep] = useState(1); // For tracking the current form step
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    age: '',
    college: '',
    paymentMethod: '',
  });

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="register-container">
      {/* Left-side image section */}
      <div className="image-section">
        <img src={logo} alt="Create Account" className="hero-image" />

      </div>

      {/* Right-side form section */}
      <div className="form-section">
        {step === 1 && (
          <div className="form-step">
            <h2>What's your email?</h2>
            <p>Don't worry we won't tell anyone.</p>
            <input
              type="email"
              name="email"
              placeholder="EMAIL"
              value={formData.email}
              onChange={handleChange}
              className="input-field"
            />
            <p className="email-note">
              Yes; United Youth Parliament may use and share my email to enable personalized advertising and to send me info about new releases, game updates, and events.
            </p>
            <button onClick={handleNextStep} className="next-button">Next</button>
          </div>
        )}

        {step === 2 && (
          <div className="form-step">
            <h2>Name</h2>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="input-field"
            />
            <h2>Course</h2>
            <input
              type="text"
              name="Course"
              placeholder="Ex : B.Tech"
              value={formData.course}
              onChange={handleChange}
              className="input-field"
            />
            <h2>Contact</h2>
            <input
              type="number"
              name="Mobile No."
              placeholder="Mobile No."
              value={formData.college}
              onChange={handleChange}
              className="input-field"
            />
            
            <h2>College</h2>
            <input
              type="text"
              name="college"
              placeholder="College Name"
              value={formData.college}
              onChange={handleChange}
              className="input-field"
            />
            <button onClick={handleNextStep} className="next-button">Next</button>
          </div>
        )}

        {step === 3 && (
          <div className="form-step">
            <h2>Choose Payment Method</h2>
            <select
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
              className="input-field"
            >
              <option value="">Select Payment Method</option>
              <option value="paypal">PayPal</option>
              <option value="creditcard">Credit Card</option>
              <option value="debitcard">Debit Card</option>
            </select>
            <button onClick={() => alert('Form Submitted!')} className="submit-button">Submit</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Register;
