
import "./login"




import React, { useState, useEffect } from "react";

const App = () => {

  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
      setIsLoggedIn(true);
    }
  }, []);

  const handleRegister = () => {
    if (!name || !email || !password) {
      alert("Барлық өрістерді толтырыңыз!");
      return;
    }
    const newUser = { name, email, password };
    localStorage.setItem("user", JSON.stringify(newUser));
    setUser(newUser);
    setIsLoggedIn(true);
  };

  const handleLogin = () => {
    if (!email || !password) {
      alert("Email және парольді енгізіңіз!");
      return;
    }
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser && storedUser.email === email && storedUser.password === password) {
      setUser(storedUser);
      setIsLoggedIn(true);
    } else {
      alert("Қате! Дұрыстап жазыңыз");
    }
  };

  const handleLogout = () => {
    setUser(null);
    setIsLoggedIn(false);
  };

  const handleDeleteAccount = () => {
    localStorage.removeItem("user");
    setUser(null);
    setIsLoggedIn(false);
  };

  const handleGuestLogin = () => {
    setUser({ name: "Guest" });
    setIsLoggedIn(true);
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <button style={{ color: "green" }} onClick={handleLogout}>Шығу</button>
          <button style={{ color: "green" }}  onClick={handleDeleteAccount}>Аккаунтты өшіру</button>
        </div>
      ) : (
        <div style={{ color: "red", gap: "10px", display:"flow-root",background:"grey",inlineSize:"19rem",padding:"10px",margin:"250px" }} >
          <h1 style={{ textDecoration:" none", fontFamily:"-moz-initial", color:"pink"}}> Кіру және тіркелу  </h1>
          <hr></hr>
          <h2>Тіркелу</h2>
          <input style={{ textDecoration:" none", fontFamily:"-moz-initial" }} type="text" 
          placeholder ="Аты" value={name}
           onChange={(e) => setName(e.target.value)}
            />
          <input type="email"
           placeholder="@akhmetasem1.gmail.com" value={email} 
           onChange={(e) => setEmail(e.target.value)} />
          <input style={{ textDecoration:" none", fontFamily:"-moz-initial" }}  type="password" 
          placeholder="Пароль" min={8} value={password} 
          onChange={(e) => setPassword(e.target.value)} />
          <button style={{ color: "green" }}  onClick={handleRegister}>Тіркелу</button>

          <h2>Кіру</h2>
          <input style={{ textDecoration:" none", fontFamily:"-moz-initial" }}  type="email" 
          placeholder="@akhmetasem1.gmail.com" value={email} 
           onChange={(e) => setEmail(e.target.value)} 
          />
          <input style={{ textDecoration:" none", fontFamily:"-moz-initial" }}  type="password"
           placeholder="Пароль" min={8} value={password} 
           onChange={(e) => setPassword(e.target.value)} />
          <button style={{ color: "green" }} onClick={handleLogin}>Кіру</button>

          <h2 >Қонақ ретінде кіру</h2>
          <button style={{ color: "green" }} onClick={handleGuestLogin}>Қонақ ретінде кіру</button>
        </div>
      )}
    </div>
  );
};

export default App;


