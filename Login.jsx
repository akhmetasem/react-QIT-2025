import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);
  const [targetPassword, setTargetPassword] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/register', { username, password });
      alert('User registered successfully!');
    } catch (error) {
      alert('Registration failed: ' + error.message);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Қош келдіңіз!</h1>
        
        <div style={styles.welcomeContainer}>
          <h2 style={styles.welcomeTitle}>Қауіпсіз жүйеге кіру үшін деректеріңізді енгізіңіз!</h2>
          <p style={styles.welcomeText}>
          Сіздің шешіміңіз.<br/>
            Денсаулық туралы нақты ақпарат – тек сізге арналған.
          </p>
        </div>
        
        <div style={styles.divider}></div>
        
        <form onSubmit={handleRegister} style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Электрондық пошта</label>
            <input
              type="email"
              placeholder="kabbelotag@gmail.com"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={styles.input}
              required
            />
          </div>
          
          <div style={styles.inputGroup}>
            <label style={styles.label}>Құпия сөз</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              required
            />
          </div>
          
          <div style={styles.checkboxGroup}>
            <input
              type="checkbox"
              id="keepLoggedIn"
              checked={keepLoggedIn}
              onChange={(e) => setKeepLoggedIn(e.target.checked)}
              style={styles.checkbox}
            />
            <label htmlFor="keepLoggedIn" style={styles.checkboxLabel}>
            Мені жүйеге кіргізіңіз
            </label>
          </div>
          
          <div style={styles.checkboxGroup}>
            <input
              type="checkbox"
              id="targetPassword"
              checked={targetPassword}
              onChange={(e) => setTargetPassword(e.target.checked)}
              style={styles.checkbox}
            />
            <label htmlFor="targetPassword" style={styles.checkboxLabel}>
            Мақсатты құпия сөз?
            </label>
          </div>
          
          <button type="submit" style={styles.startButton}>
            <span style={styles.buttonText}>Кіру</span>
            <div style={styles.buttonHoverEffect}></div>
          </button>
        </form>
        
        <div style={styles.footer}>
          <p style={styles.signInText}>Өзіңіздің жеке аккаунтыңыз бар ма?</p>
          <a href="#" style={styles.signInLink}>Кіру</a>
        </div>
      </div>
      
      <div style={styles.bubbles}>
        {[...Array(15)].map((_, i) => (
          <div key={i} style={styles.bubble(i)}></div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#ffecf1',
    backgroundImage: 'radial-gradient(#ffb6c1 1px, transparent 1px), radial-gradient(#ffb6c1 1px, transparent 1px)',
    backgroundSize: '40px 40px',
    backgroundPosition: '0 0, 20px 20px',
    position: 'relative',
    overflow: 'hidden',
    fontFamily: "'Poppins', sans-serif",
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '24px',
    boxShadow: '0 15px 35px rgba(255, 105, 180, 0.25)',
    padding: '40px',
    width: '100%',
    maxWidth: '450px',
    zIndex: 10,
    position: 'relative',
    border: '1px solid rgba(255, 182, 193, 0.3)',
    textAlign: 'center',
  },
  title: {
    fontSize: '2.8rem',
    fontWeight: '800',
    marginBottom: '15px',
    background: 'linear-gradient(45deg, #ff1493, #ff6eb4)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)',
    letterSpacing: '-0.5px',
  },
  welcomeContainer: {
    textAlign: 'center',
    marginBottom: '25px',
  },
  welcomeTitle: {
    fontSize: '1.8rem',
    fontWeight: '700',
    marginBottom: '10px',
    color: '#ff1493',
  },
  welcomeText: {
    fontSize: '1.05rem',
    lineHeight: '1.5',
    color: '#8a4d6e',
    maxWidth: '300px',
    margin: '0 auto',
  },
  divider: {
    height: '2px',
    width: '100%',
    background: 'linear-gradient(to right, transparent, #ff7eb9, transparent)',
    margin: '25px 0',
  },
  form: {
    width: '100%',
  },
  inputGroup: {
    marginBottom: '25px',
    textAlign: 'left',
  },
  label: {
    display: 'block',
    marginBottom: '10px',
    fontWeight: '600',
    color: '#d43f78',
    fontSize: '1.05rem',
  },
  input: {
    width: '100%',
    padding: '15px 20px',
    border: '2px solid #ffb6c1',
    backgroundColor: 'rgba(255, 182, 193, 0.08)',
    borderRadius: '15px',
    fontSize: '1rem',
    color: '#7a2f52',
    outline: 'none',
    transition: 'all 0.3s ease',
    boxSizing: 'border-box',
  },
  inputFocus: {
    borderColor: '#ff1493',
    boxShadow: '0 0 0 3px rgba(255, 20, 147, 0.2)',
  },
  checkboxGroup: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '15px',
  },
  checkbox: {
    width: '20px',
    height: '20px',
    accentColor: '#ff66a3',
    marginRight: '12px',
    cursor: 'pointer',
  },
  checkboxLabel: {
    color: '#8a4d6e',
    fontSize: '0.95rem',
    cursor: 'pointer',
    fontWeight: '500',
  },
  startButton: {
    width: '100%',
    padding: '18px',
    fontSize: '1.2rem',
    fontWeight: '700',
    color: 'white',
    background: 'linear-gradient(45deg, #ff3b8d, #ff6eb4)',
    border: 'none',
    borderRadius: '15px',
    cursor: 'pointer',
    boxShadow: '0 6px 15px rgba(255, 59, 141, 0.4)',
    marginTop: '25px',
    transition: 'all 0.3s ease',
    position: 'relative',
    overflow: 'hidden',
  },
  buttonText: {
    position: 'relative',
    zIndex: 2,
  },
  buttonHoverEffect: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '0%',
    height: '100%',
    background: 'linear-gradient(45deg, #ff6eb4, #ff3b8d)',
    transition: 'width 0.4s ease',
    zIndex: 1,
  },
  footer: {
    marginTop: '30px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '8px',
  },
  signInText: {
    color: '#8a4d6e',
    fontSize: '1rem',
    margin: 0,
  },
  signInLink: {
    color: '#ff1493',
    fontWeight: '700',
    textDecoration: 'none',
    fontSize: '1.05rem',
    transition: 'all 0.2s ease',
  },
  bubbels: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
  bubble: (index) => ({
    position: 'absolute',
    bottom: '-150px',
    width: `${20 + Math.random() * 30}px`,
    height: `${20 + Math.random() * 30}px`,
    backgroundColor: `rgba(255, ${182 - index * 5}, ${193 - index * 2}, ${0.4 + Math.random() * 0.3})`,
    borderRadius: '50%',
    left: `${Math.random() * 100}%`,
    animation: `float ${10 + Math.random() * 20}s linear infinite`,
    animationDelay: `${Math.random() * 5}s`,
    filter: 'blur(1px)',
  }),
  '@keyframes float': {
    '0%': {
      transform: 'translateY(0)',
      opacity: 0,
    },
    '10%': {
      opacity: 1,
    },
    '90%': {
      opacity: 0.8,
    },
    '100%': {
      transform: 'translateY(-100vh)',
      opacity: 0,
    }
  }
};


const styleSheet = document.createElement('style');
styleSheet.textContent = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');
  
  button:hover div {
    width: 100%;
  }
  
  input:focus {
    border-color: #ff1493 !important;
    box-shadow: 0 0 0 3px rgba(255, 20, 147, 0.2) !important;
  }
  
  a:hover {
    color: #d40078 !important;
    text-decoration: underline !important;
  }
  
  button:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(255, 59, 141, 0.5) !important;
  }
  
  ${Object.entries(styles).map(([key, value]) => {
    if (key.startsWith('@keyframes')) {
      return `${key} { ${Object.entries(value).map(([k, v]) => `${k} { ${Object.entries(v).map(([prop, val]) => `${prop}:${val};`).join('')} }`).join('')} }`;
    }
    return '';
  }).join('')}
`;
document.head.appendChild(styleSheet);

export default Register;