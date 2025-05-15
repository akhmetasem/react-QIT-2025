
import { Link } from 'react-router-dom';

const FlowerCard = ({ flower }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
      <div className="h-48 overflow-hidden">
        <img 
          src={flower.image || 'https://via.placeholder.com/300x200?text=Flower'} 
          alt={flower.name} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{flower.name}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">{flower.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-indigo-600 dark:text-indigo-400 font-bold">${flower.price}</span>
          <Link 
            to={`/flowers/${flower.id}`} 
            className="px-3 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors"
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FlowerCard;