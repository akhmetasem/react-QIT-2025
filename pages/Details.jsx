
import { useParams, Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import LoadingSpinner from '../components/LoadingSpinner';

const Details = () => {
  const { id } = useParams();
  const { data: flower, loading, error } = useFetch(`https://flowers.free.beeceptor.com`);

  if (loading) return <LoadingSpinner />;
  if (error) return <div className="text-red-500 text-center py-8">{error}</div>;
  if (!flower) return <div className="text-center py-8">Flower not found</div>;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-start mb-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">{flower.name}</h1>
        <Link 
          to="/dashboard" 
          className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors"
        >
          Back to Dashboard
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <img 
            src={flower.image || 'https://flowers.free.beeceptor.com'} 
            alt={flower.name} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Description</h2>
            <p className="text-gray-600 dark:text-gray-300">{flower.description}</p>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Type</h3>
              <p className="text-lg text-gray-800 dark:text-white capitalize">{flower.type}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Price</h3>
              <p className="text-lg font-bold text-indigo-600 dark:text-indigo-400">${flower.price}</p>
            </div>
          </div>

          <div className="flex space-x-4">
            <Link 
              to={`/flowers/edit/${flower.id}`}
              className="flex-1 text-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              Edit
            </Link>
            <Link 
              to="/dashboard" 
              className="flex-1 text-center px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors"
            >
              Back
            </Link>
            
          </div>
        </div>
      </div>
      
    </div>
    
  );
};

export default Details;