import { useState } from 'react';
import axios from 'axios';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);
  const [targetPassword, setTargetPassword] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:3000/register', { username, password });
    alert('User registered');
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Қош келдіңіз!</h1>
      
      <div style={styles.welcomeContainer}>
        <h2 style={styles.welcomeTitle}>Өзіңіздің жеке кабинетіңізді 
        ашуға бір қадам ғана қалды.</h2>
        <p style={styles.welcomeText}>
          Сіз үшін де біз үшін де өте маңызды.<br/>
          Сізді күтемін!
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
        <div style={styles.inputGroup}>
          <label style={styles.label}>Пайдаланушы аты</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Жасы</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Адрес</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>ЖСН</label>
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
        
        <button type="submit" style={styles.startButton}>Тіркелу</button>
      </form>
      
      <div style={styles.signInContainer}>
        <p style={styles.signInText}>Өзіңіздің жеке аккаунтыңыз бар ма? <a href="#" style={styles.signInLink}>Кіру</a></p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#fff0f7',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: '#5a2d43',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#ff3b8d',
    textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
  },
  welcomeContainer: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  welcomeTitle: {
    fontSize: '1.8rem',
    fontWeight: '600',
    marginBottom: '5px',
    color: '#ff1493',
  },
  welcomeText: {
    fontSize: '1rem',
    lineHeight: '1.4',
    color: '#8a4d6e',
  },
  divider: {
    height: '1px',
    width: '100%',
    maxWidth: '400px',
    background: 'linear-gradient(to right, transparent, #ff7eb9, transparent)',
    margin: '20px 0',
  },
  form: {
    width: '100%',
    maxWidth: '400px',
  },
  inputGroup: {
    marginBottom: '25px',
  },
  label: {
    display: 'block',
    marginBottom: '8px',
    fontWeight: '500',
    color: '#d43f78',
  },
  input: {
    width: '100%',
    padding: '12px 10px',
    border: 'none',
    borderBottom: '2px solid #ff66a3',
    backgroundColor: 'rgba(255, 182, 193, 0.1)',
    fontSize: '1rem',
    color: '#7a2f52',
    outline: 'none',
    transition: 'border-color 0.3s',
  },
  inputFocus: {
    borderBottom: '2px solid #ff1493',
  },
  checkboxGroup: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '15px',
  },
  checkbox: {
    width: '18px',
    height: '18px',
    accentColor: '#ff66a3',
    marginRight: '10px',
    cursor: 'pointer',
  },
  checkboxLabel: {
    color: '#8a4d6e',
    fontSize: '0.95rem',
    cursor: 'pointer',
  },
  startButton: {
    width: '100%',
    padding: '14px',
    fontSize: '1.1rem',
    fontWeight: '600',
    color: 'white',
    background: 'linear-gradient(45deg, #ff3b8d, #ff6eb4)',
    border: 'none',
    borderRadius: '30px',
    cursor: 'pointer',
    boxShadow: '0 4px 10px rgba(255, 59, 141, 0.3)',
    marginTop: '20px',
    transition: 'all 0.3s ease',
  },
  signInContainer: {
    marginTop: '30px',
    textAlign: 'center',
  },
  signInText: {
    color: '#8a4d6e',
    fontSize: '0.95rem',
  },
  signInLink: {
    color: '#ff1493',
    fontWeight: '600',
    textDecoration: 'none',
    marginLeft: '5px',
  },
};

export default Register;