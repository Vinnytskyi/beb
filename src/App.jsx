import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import Waves from './components/Waves';
import LanyardCard from './components/LanyardCard';
import ProfileCard from "./components/ProfileCard";

  

function App() {
  return (
    <div style={{ position: 'relative' }}>
      <Waves
        lineColor="#2961D1"
        backgroundColor="rgba(18, 18, 18, 0.2)"
        waveSpeedX={0.002}
        waveSpeedY={0.001}
        waveAmpX={40}
        waveAmpY={20}
        friction={0.9}
        tension={0.01}
        maxCursorMove={35}
        xGap={12}
        yGap={36}
      />
      <ProfileCard
        name="Javi A. Torres"
        title="Software Engineer"
        handle="javicodes"
        status="Online"
        contactText="Contact Me"
        avatarUrl="https://png.klev.club/uploads/posts/2024-04/png-klev-club-v8l6-p-volk-s-uoll-strit-png-8.png"
        showUserInfo={true}
        enableTilt={true}
        onContactClick={() => console.log('Contact clicked')}
      />
      {/* Темний напівпрозорий шар */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      <div
        style={{
          position: 'relative',
          color: '#fff',
          padding: '20px',
          zIndex: 2,
        }}
      >
        <h1>Привіт! Це моє портфоліо👨‍💻</h1>
        <p>Рухай мишкою, щоб побачити анімацію.</p>

        {/* 🔽 Lanyard стиль профілю */}
        <div
          style={{
            backgroundColor: '#2f3136',
            color: '#fff',
            padding: '12px 16px',
            borderRadius: '12px',
            maxWidth: '300px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)',
            marginTop: '20px',
          }}
        >
          <img
            src="https://i.imgur.com/0y0y0y0.png" // 🔁 Замінити на свою аву
            alt="Avatar"
            style={{ width: '48px', height: '48px', borderRadius: '50%' }}
          />
          <div>
            <div style={{ fontWeight: 'bold' }}>Твоє Ім’я</div>
            <div style={{ fontSize: '14px', color: '#b9bbbe' }}>🟢 Онлайн</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
