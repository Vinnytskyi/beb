// src/components/LanyardCard.jsx
import React from 'react';

const LanyardCard = () => {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#2f3136',
      color: '#fff',
      padding: '12px 16px',
      borderRadius: '12px',
      maxWidth: '300px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
      fontFamily: 'sans-serif',
    }}>
      <img
  src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
  alt="Avatar"
        style={{
          width: '48px',
          height: '48px',
          borderRadius: '50%',
          marginRight: '12px',

        }}
      />
      <div>
        <div style={{ fontWeight: 'bold', fontSize: '16px' }}>Твоє ім’я</div>
        <div style={{ fontSize: '14px', color: '#b9bbbe' }}>🟢 Online</div>
      </div>
    </div>
  );
};

export default LanyardCard;
