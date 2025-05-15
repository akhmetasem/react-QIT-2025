
import { useParams, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';
import FlowerForm from '../components/FlowerForm';
import LoadingSpinner from '../components/LoadingSpinner';

const EditFlower = () => {
  const { id } = useParams();
  const { flowers, updateFlower } = useContext(AppContext);
  const [flower, setFlower] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const foundFlower = flowers.find(f => f.id.toString() === id);
    if (foundFlower) {
      setFlower(foundFlower);
    } else {
      navigate('/dashboard');
    }
  }, [id, flowers, navigate]);

  const handleSubmit = async (updatedData) => {
    setLoading(true);
    try {
      await updateFlower(id, updatedData);
      navigate(`/flowers/${id}`);
    } catch (err) {
      console.error('Error updating flower:', err);
    } finally {
      setLoading(false);
    }
  };

  if (!flower) return <LoadingSpinner />;

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Edit {flower.name}</h1>
        <button 
          onClick={() => navigate(`/flowers/${id}`)}
          className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors"
        >
          Cancel
        </button>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <FlowerForm initialData={flower} onSubmit={handleSubmit} loading={loading} />
      </div>
    </div>
  );
};

export default EditFlower;