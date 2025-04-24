import React, { useState } from "react";
import "./App.css";

const ProfileForm = () => {
  const [form, setForm] = useState({
    name: "",
    lastname: "",
    age: "",
    date: "",
    email: "",
    number: "",
    adress: "",
    job: "",
  });

  const [profiles, setProfiles] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProfiles((prev) => [...prev, form]);
    setForm({
      name: "",
      lastname: "",
      age: "",
      date: "",
      email: "",
      number: "",
      adress: "",
      job: "",
    });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="profile-form">
        <h1>Профиль </h1>
        <div className="form-section">
          <label>Аты:
            <input type="text" name="name" value={form.name} onChange={handleChange} required />
          </label>
          <label>Тегі:
            <input type="text" name="lastname" value={form.lastname} onChange={handleChange} required />
          </label>
          <label>Жасы:
            <input type="number" name="age" value={form.age} onChange={handleChange} required />
          </label>
          <label>Туған күні:
            <input type="date" name="date" value={form.date} onChange={handleChange} required />
          </label>
          <label>Email:
            <input type="email" name="email" value={form.email} onChange={handleChange} required />
          </label>
          <label>Телефон:
            <input type="text" name="number" value={form.number} onChange={handleChange} required />
          </label>
          <label>Мекенжай:
            <input type="text" name="adress" value={form.adress} onChange={handleChange} required />
          </label>
          <label>Мамандығы:
            <input type="text" name="job" value={form.job} onChange={handleChange} required />
          </label>
        </div>
        <button type="submit">Қосу</button>
      </form>

      <div className="profile-list">
        <h2>Профиль тізімі:</h2>
        {profiles.map((profile, index) => (
          <div key={index} className="profile-card">
            <p><strong>Аты:</strong> {profile.name}</p>
            <p><strong>Тегі:</strong> {profile.lastname}</p>
            <p><strong>Жасы:</strong> {profile.age}</p>
            <p><strong>Туған күні:</strong> {profile.date}</p>
            <p><strong>Email:</strong> {profile.email}</p>
            <p><strong>Телефон:</strong> {profile.number}</p>
            <p><strong>Мекенжай:</strong> {profile.adress}</p>
            <p><strong>Мамандығы:</strong> {profile.job}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileForm;
