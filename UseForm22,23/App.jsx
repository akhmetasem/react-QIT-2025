import React, { useState } from "react";
import "./App.css";

const CarForm = () => {
  const [car, setCar] = useState({
    name: "",
    model: "",
    years: "",
    color: "",
    price: "",
    description: "",
    steering: "",
    milage: "",
  });

  const [submittedCars, setSubmittedCars] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCar((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedCars((prev) => [...prev, car]);
    setCar({
      name: "",
      model: "",
      years: "",
      color: "",
      price: "",
      description: "",
      steering: "",
      milage: "",
    });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="car-form">
        <div className="form-section">
          <label>Маркасы:<input type="text" name="name" value={car.name} onChange={handleChange} required /></label>
          <label>Моделі:<input type="text" name="model" value={car.model} onChange={handleChange} required /></label>
          <label>Жылы:<input type="text" name="years" value={car.years} onChange={handleChange} required /></label>
          <label>Түсі:<input type="text" name="color" value={car.color} onChange={handleChange} required /></label>
          <label>Бағасы:<input type="text" name="price" value={car.price} onChange={handleChange} required /></label>
          <label>Жүгіру:<input type="text" name="milage" value={car.milage} onChange={handleChange} required /></label>
        </div>

        <div className="form-section">
          <label>Сипаттама:<textarea name="description" value={car.description} onChange={handleChange} required /></label>
          <div className="radio-group">
            <label><input type="radio" name="steering" value="оңға" checked={car.steering === "оңға"} onChange={handleChange} /> Оңға</label>
            <label><input type="radio" name="steering" value="солға" checked={car.steering === "солға"} onChange={handleChange} /> солға</label>
          </div>
        </div>

        <button type="submit">Қосу</button>
      </form>

      <div className="car-list">
        <h2>Автокөлік тізімі:</h2>
        {submittedCars.map((submittedCar, index) => (
          <div key={index} className="car-card">
            <p><strong>Маркасы:</strong> {submittedCar.name}</p>
            <p><strong>Моделі:</strong> {submittedCar.model}</p>
            <p><strong>Жылы:</strong> {submittedCar.years}</p>
            <p><strong>Түсі:</strong> {submittedCar.color}</p>
            <p><strong>Бағасы:</strong> {submittedCar.price}</p>
            <p><strong>Жүгіру:</strong> {submittedCar.milage}</p>
            <p><strong>Руль:</strong> {submittedCar.steering}</p>
            <p><strong>Сипаттама:</strong> {submittedCar.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarForm;
