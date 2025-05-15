import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import FlowerForm from '../components/FlowerForm';

const NewFlower = () => {
  const { addFlower } = useContext(AppContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (flowerData) => {
    setLoading(true);
    try {
      await addFlower(flowerData);
      navigate('/dashboard');
    } catch (err) {
      console.error('Error adding flower:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-pink-800 dark:text-white mb-6">
           New Flower
        </h1>
        <button 
          onClick={() => navigate('/dashboard')}
          className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors"
        >
          Cancel
        </button>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <FlowerForm onSubmit={handleSubmit} loading={loading} />
      </div>
    </div>
  );
};

export default NewFlower;
