import { useState, useEffect } from 'react';

const Dashboard = () => {
  const [flowersName, setFlowerName] = useState('');
  const [flowersImg, setImg] = useState('');
  const [flowersPrice, setPrice] = useState('');
  const [massive, setMassive] = useState([]);


  useEffect(() => {
    try {
      const savedFlowers = JSON.parse(localStorage.getItem('flowers'));
      if (Array.isArray(savedFlowers)) {
        setMassive(savedFlowers);
      }
    } catch (error) {
      console.error('Жарамсыз localStorage:', error);
    }
  }, []);

  
  useEffect(() => {
    localStorage.setItem('flowers', JSON.stringify(massive));
  }, [massive]);

  const save = () => {
    const newFlower = {
      name: flowersName,
      img: flowersImg,
      price: flowersPrice,
    };

    setMassive(prev => [...prev, newFlower]);
    setFlowerName('');
    setImg('');
    setPrice('');
  };

  return (
    <>
      <input
        placeholder="Flower name"
        value={flowersName}
        onChange={(e) => setFlowerName(e.target.value)}
      />
      <input
        placeholder="Image URL"
        value={flowersImg}
        onChange={(e) => setImg(e.target.value)}
      />
      <input
        placeholder="Price"
        value={flowersPrice}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button onClick={save}>Save</button>
      <hr />

      {massive.map((flower, index) => (
        <div key={index}>
          <h3>{flower.name}</h3>
          <img src={flower.img} alt={flower.name} width={200} />
          <p>Price: {flower.price}</p>
        </div>
      ))}
    </>
  );
};

export default Dashboard;
