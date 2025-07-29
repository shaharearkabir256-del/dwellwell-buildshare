import React, { useState } from 'react';

const WelcomeModal: React.FC = () => {
  const [show, setShow] = useState(true);

  if (!show) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
    }}>
      <div style={{
        background: 'white',
        padding: '20px 30px',
        borderRadius: '8px',
        textAlign: 'center',
        maxWidth: '300px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.3)'
      }}>
        <h2>স্বাগতম!</h2>
        <p>আমাদের ওয়েবসাইটে আসার জন্য ধন্যবাদ।</p>
        <button
          onClick={() => setShow(false)}
          style={{
            padding: '8px 16px',
            backgroundColor: '#007BFF',
            border: 'none',
            color: 'white',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '16px'
          }}
        >
          বন্ধ করুন
        </button>
      </div>
    </div>
  );
};

export default WelcomeModal;
