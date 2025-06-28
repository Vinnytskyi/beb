import { useState } from 'react';
import './App.css';
import Waves from './components/Waves';
import ProfileCard from "./components/ProfileCard";
import GooeyNav from './components/GooeyNav';

function App() {
  const navItems = [
    { id: 1, label: 'Home', icon: '🏠', href: '#home' },
    { id: 2, label: 'About', icon: 'ℹ️', href: '#about' },
    { id: 3, label: 'Services', icon: '🛠', href: '#services' },
    { id: 4, label: 'Contact', icon: '📞', href: '#contact' },
  ];

  const [showAbout, setShowAbout] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showServices, setShowServices] = useState(false);

  const handleNavClick = (item) => {
    if (item.label === 'About') {
      setShowAbout(true);
      setShowContact(false);
      setShowServices(false);
    } else if (item.label === 'Contact') {
      setShowContact(true);
      setShowAbout(false);
      setShowServices(false);
    } else if (item.label === 'Services') {
      setShowServices(true);
      setShowAbout(false);
      setShowContact(false);
    } else {
      setShowAbout(false);
      setShowContact(false);
      setShowServices(false);
      if (item.href && item.href.startsWith('#')) {
        const el = document.querySelector(item.href);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <div>
      {/* Waves - на весь екран, фіксований фон */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
          pointerEvents: 'none',
        }}
      >
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
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Навігація - фіксована зверху */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
          width: '100%',
          maxWidth: '600px',
          display: 'flex',
          justifyContent: 'center',
          padding: '10px 0',
          backgroundColor: 'transparent',
          pointerEvents: 'auto',
        }}
      >
        {/* Тепер рендеримо GooeyNav із анімацією */}
        <GooeyNav items={navItems} onItemClick={handleNavClick} />
      </div>

      {/* Основний контент */}
      <div
        style={{
          paddingTop: '80px',
          position: 'relative',
          zIndex: 5,
          color: '#fff',
          padding: '20px',
        }}
      >
        <ProfileCard
          name="Ver1kor"
          title="Software Engineer"
          handle="ver1kor"
          status="Online"
          contactText="Contact Me"
          avatarUrl="https://png.klev.club/uploads/posts/2024-04/png-klev-club-v8l6-p-volk-s-uoll-strit-png-8.png"
          showUserInfo={true}
          enableTilt={true}
          onContactClick={() => console.log('Contact clicked')}
        />

        <h1>Привіт! Це моє портфоліо👨‍💻</h1>
        <p>Рухай мишкою, щоб побачити анімацію.</p>
      </div>

      {/* Центрований блок About */}
      {showAbout && (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'rgba(0,0,0,0.9)',
            color: '#fff',
            padding: '30px 40px',
            borderRadius: '12px',
            boxShadow: '0 0 20px #9b59b6',
            maxWidth: '600px',
            zIndex: 20,
            textAlign: 'center',
            userSelect: 'none',
          }}
        >
          <h2>About Me</h2>
          <p style={{ marginTop: '15px' }}>
            Я досвідчений айтішник, який любить створювати красиві та функціональні веб-додатки.
            Використовую React, Vite, сучасні технології та анімації.
            Моя мета — робити інтерфейси зручно та приємно користуватися.
          </p>
          <button
            onClick={() => setShowAbout(false)}
            style={{
              marginTop: '25px',
              backgroundColor: '#9b59b6',
              border: 'none',
              padding: '10px 25px',
              borderRadius: '6px',
              color: '#fff',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
          >
            Close
          </button>
        </div>
      )}

      {/* Центрований блок Contact */}
      {showContact && (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'rgba(0,0,0,0.9)',
            color: '#fff',
            padding: '30px 40px',
            borderRadius: '12px',
            boxShadow: '0 0 20px #3498db',
            maxWidth: '400px',
            zIndex: 20,
            textAlign: 'center',
            userSelect: 'none',
          }}
        >
          <h2>Контакти</h2>
          <p style={{ marginTop: '15px' }}>📞 Телефон: +38 099 123 45 67</p>
          <p>
            💬 Telegram:{' '}
            <a
              href="https://web.telegram.org/k/#-2459129543"
              target="_blank"
              rel="noreferrer"
              style={{ color: '#1DA1F2' }}
            >
              @yourtelegram
            </a>
          </p>
          <p>
            📸 Instagram:{' '}
            <a
              href="https://www.instagram.com/vinnitskiidania/"
              target="_blank"
              rel="noreferrer"
              style={{ color: '#E1306C' }}
            >
              @yourinstagram
            </a>
          </p>
          <button
            onClick={() => setShowContact(false)}
            style={{
              marginTop: '25px',
              backgroundColor: '#3498db',
              border: 'none',
              padding: '10px 25px',
              borderRadius: '6px',
              color: '#fff',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
          >
            Close
          </button>
        </div>
      )}

      {/* Центрований блок Services */}
      {showServices && (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'rgba(0,0,0,0.9)',
            color: '#fff',
            padding: '30px 40px',
            borderRadius: '12px',
            boxShadow: '0 0 20px #27ae60',
            maxWidth: '600px',
            zIndex: 20,
            textAlign: 'center',
            userSelect: 'none',
          }}
        >
          <h2>Мої Послуги</h2>
          <ul style={{ textAlign: 'left', marginTop: '15px' }}>
            <li>🖥 Розробка сучасних веб-додатків на React</li>
            <li>⚙️ Налаштування та оптимізація серверів</li>
            <li>📱 Адаптивний дизайн під мобільні пристрої</li>
            <li>🔒 Забезпечення безпеки додатків</li>
            <li>🚀 Консультації щодо технологій і архітектури</li>
          </ul>
          <button
            onClick={() => setShowServices(false)}
            style={{
              marginTop: '25px',
              backgroundColor: '#27ae60',
              border: 'none',
              padding: '10px 25px',
              borderRadius: '6px',
              color: '#fff',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
          >
          Close
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
