import { useState, useEffect } from 'react';

export default function WelcomeModal() {
  const [show, setShow] = useState(true);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    // মডাল আসার আগে fade animation শুরু
    setTimeout(() => setFade(true), 50);
  }, []);

  const closeModal = () => {
    setFade(false);
    setTimeout(() => setShow(false), 300); // fade-out সময়
  };

  if (!show) return null;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      backgroundColor: fade ? 'rgba(0,0,0,0.5)' : 'rgba(0,0,0,0)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 99999,
      transition: 'background-color 0.3s ease'
    }}>
      <div style={{
        background: 'white',
        padding: '25px 30px',
        borderRadius: '15px',
        textAlign: 'center',
        maxWidth: '320px',
        boxShadow: '0 8px 20px rgba(0,0,0,0.25)',
        transform: fade ? 'scale(1)' : 'scale(0.8)',
        opacity: fade ? 1 : 0,
        transition: 'all 0.3s ease'
      }}>
        <h2 style={{ marginBottom: '10px' }}>🎉 স্বাগতম!</h2>
        <p style={{ marginBottom: '15px' }}>আমাদের ওয়েবসাইটে আসার জন্য ধন্যবাদ।</p>
        <button
          onClick={closeModal}
          style={{
            padding: '10px 18px',
            background: 'linear-gradient(90deg, #007BFF, #00C4FF)',
            border: 'none',
            color: 'white',
            borderRadius: '25px',
            cursor: 'pointer',
            fontSize: '15px',
            fontWeight: 'bold',
            transition: 'background 0.3s ease'
          }}
          onMouseOver={(e) => (e.currentTarget.style.background = 'linear-gradient(90deg, #0056d2, #00a0cc)')}
          onMouseOut={(e) => (e.currentTarget.style.background = 'linear-gradient(90deg, #007BFF, #00C4FF)')}
        >
          শুরু করুন
        </button>
      </div>
    </div>
  );
}
