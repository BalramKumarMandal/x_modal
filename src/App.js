import React, { useState } from 'react';
import './App.css';

function App() {
  // State for controlling the modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Form data state
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    dob: '',
    phone: '',
  });

  // Handle form input change
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  // Handle opening the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Handle closing the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Handle form submission with validation
  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, dob, phone } = formData;

    // Check if all fields are filled
    if (!username || !email || !dob || !phone) {
      alert('Please fill out all fields.');
      return;
    }

    // Validate email
    if (!email.includes('@')) {
      alert('Invalid email. Please check your email address.');
      return;
    }

    // Validate phone number (10 digits)
    if (phone.length !== 10 || isNaN(phone)) {
      alert('Invalid phone number. Please enter a 10-digit phone number.');
      return;
    }

    // Validate date of birth (must not be in the future)
    const today = new Date();
    const dobDate = new Date(dob);
    if (dobDate > today) {
      alert('Invalid date of birth. Please enter a valid date.');
      return;
    }

    // If all is well, close the modal and reset form data
    alert('Form submitted successfully!');
    setIsModalOpen(false);
    setFormData({
      username: '',
      email: '',
      dob: '',
      phone: '',
    });
  };

  return (
    <div className="App">
      {/* Open Form Button */}
      <h1>User Details Modal</h1>
      <button onClick={openModal}>Open Form</button>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <form onSubmit={handleSubmit}>
              <h2>Fill Details</h2>

              {/* Username */}
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                value={formData.username}
                onChange={handleChange}
              />

              {/* Email */}
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
              />

              {/* Date of Birth */}
              <label htmlFor="dob">Date of Birth:</label>
              <input
                type="date"
                id="dob"
                value={formData.dob}
                onChange={handleChange}
              />

              {/* Phone */}
              <label htmlFor="phone">Phone Number:</label>
              <input
                type="text"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
              />

              {/* Submit Button */}
              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
