import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../store/auth'; // Adjust the path as necessary

const CampaignModal = ({ campaign, onClose }) => {
  const { user } = useAuth(); // Access user from AuthContext
  const [showDonationModal, setShowDonationModal] = useState(false);
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [error, setError] = useState(null); // To handle error messages

  const handleDonationClick = () => {
    setShowDonationModal(true);
  };

  const handleDonate = async () => {
    if (!name || !amount) {
      setError('Please enter both name and amount.'); // Validate input
      return;
    }

    try {
      // Make a POST request to the donation endpoint with userId
      await axios.post('http://localhost:5000/api/donations/donate', {
        userId: user._id, // Use userId from user object
        name,
        amount: parseFloat(amount), // Convert amount to a number
      });
      alert('Donation successful!');
      setShowDonationModal(false);
      onClose();
    } catch (error) {
      console.error("Error making donation:", error);
      setError('Failed to make donation.'); // Handle API errors
    }
  };

  return (
    <div className="modal-overlay">
      {!showDonationModal ? (
        <div className="modal-content">
          <h2>{campaign.name}</h2>
          <p><strong>NGO: </strong>{campaign.ngo}</p>
          <p>{campaign.description}</p>

          <h3>Campaign Goals</h3>
          <p>{campaign.goals}</p>

          <h3>Impact</h3>
          <p>{campaign.impact}</p>

          <h3>Timeline</h3>
          <p>{campaign.timeline}</p>

          <h3>Testimonials</h3>
          <p>{campaign.testimonials}</p>

          <p><strong>Donation Progress: </strong>{campaign.progress}%</p>
          <div className="progress-bar-modal">
            <div className="progress" style={{ width: `${campaign.progress}%` }}></div>
          </div>

          <button className="donate-btn" onClick={handleDonationClick}>Donate</button>
          <button className="close-btn" onClick={onClose}>Close</button>
        </div>
      ) : (
        <div className="modal-content">
          <h2>Donate to {campaign.name}</h2>
          {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message */}
          <input
            type="text"
            placeholder="Your Name"
            className="input-field"
            value={name}
            onChange={(e) => setName(e.target.value)} // Update name state
          />
          <input
            type="number"
            placeholder="Amount (INR)"
            className="input-field"
            value={amount}
            onChange={(e) => setAmount(e.target.value)} // Update amount state
          />
          <button className="donate-btn" onClick={handleDonate}>Donate</button>
          <button className="close-btn" onClick={() => setShowDonationModal(false)}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default CampaignModal;
