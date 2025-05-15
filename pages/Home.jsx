import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Home = () => {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen text-center px-85  py-8 ${theme === 'light' ? 'bg-white' : 'bg-black'}`}>
      <h1 className="text-4xl font-bold text-pink-800 dark:text-white mb-6">Welcome to Bloom & Grow</h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
        Discover the beauty of nature with our exquisite collection of flowers
      </p>
      <div class="flex flex-wrap justify-center gap-6 p-4">
      <div class="grid grid-cols-3 gap-4 p-4 max-w-5xl mx-auto">
  <img
    src="https://m.media-amazon.com/images/I/A1P8NUW5fxL._SY450_.jpg"
    alt="Image 1"
    class="w-full h-60 object-cover rounded-2xl shadow-xl transition-transform duration-500 hover:scale-105 hover:rotate-2 hover:shadow-2xl"
  />
  <img
    src="https://i.pinimg.com/736x/87/a7/17/87a717fd0bff6ecd36ea26b759fc4628.jpg"
    alt="Image 2"
    class="w-full h-60 object-cover rounded-2xl shadow-xl transition-transform duration-500 hover:scale-105 hover:-rotate-2 hover:shadow-2xl"
  />
  <img
    src="https://wallpapercave.com/wp/wp13995232.jpg"
    alt="Image 3"
    class="w-full h-60 object-cover rounded-2xl shadow-xl transition-transform duration-500 hover:scale-110 hover:rotate-1 hover:shadow-2xl"
  />
  <img
    src="https://i.pinimg.com/736x/fe/42/cc/fe42ccbe25d46283a4d8d5ec6113bd2e.jpg"
    alt="Image 4"
    class="w-full h-60 object-cover rounded-2xl shadow-xl transition-transform duration-500 hover:scale-110 hover:rotate-1 hover:shadow-2xl"
  />
  <img
    src="https://i.pinimg.com/736x/ea/9a/d9/ea9ad92cb53721f3bc2c04f899541787.jpg"
    alt="Image 5"
    class="w-full h-60 object-cover rounded-2xl shadow-xl transition-transform duration-500 hover:scale-110 hover:rotate-1 hover:shadow-2xl"
  />
  <img
    src="https://ih1.redbubble.net/image.2448103930.8203/raf,360x360,075,t,fafafa:ca443f4786.jpg"
    alt="Image 6"
    class="w-full h-60 object-cover rounded-2xl shadow-xl transition-transform duration-500 hover:scale-110 hover:rotate-1 hover:shadow-2xl"
  />
</div>

</div>

      <div className="mb-12">
        
      </div>
      
      <div className="flex flex-wrap gap-4 justify-center my-8">
  <Link 
    to="/dashboard" 
    className="inline-block px-6 py-3 bg-indigo-300 text-white rounded-lg hover:bg-indigo-700 transition-colors text-lg font-medium"
  >
    Explore Our Collection
  </Link>
  
  <Link 
    to="/flowers/new" 
    className="inline-block px-6 py-3 bg-indigo-300 text-white rounded-lg hover:bg-indigo-700 transition-colors text-lg font-medium"
  >
    New Flower
  </Link>
  
  <Link 
    to="/flowers/:id" 
    className="inline-block px-6 py-3 bg-indigo-300 text-white rounded-lg hover:bg-indigo-700 transition-colors text-lg font-medium"
  >
    Details
  </Link>
  
  <Link 
    to="/flowers/edit/:id" 
    className="inline-block px-6 py-3 bg-indigo-300 text-white rounded-lg hover:bg-indigo-700 transition-colors text-lg font-medium"
  >
    Edit Flower
  </Link>
  <footer className="bg-pink-800 text-white py-8">
  <div className="max-w-6xl mx-auto px-2 flex flex-col md:flex-row justify-between items-center">
    <div className="text-center md:text-left">
      <p className="text-sm">&copy; 2025 Flower Shop. Барлық құқықтар қорғалған.</p>
      <p className="text-sm mt-2">Take the beauty of nature with you!</p>
    </div>

    <div className="mt-6 md:mt-0 text-center">
      <p className="text-sm mb-4">Experience the beauty of nature through flowers. We understand the beauty and meaning of each flower and present it to you.</p>
      <p className="text-sm mb-4">We have selected the best flowers for you. They will make your day brighter and more beautiful.</p>
    </div>

    <div className="flex space-x-6 mt-6 md:mt-0">
      <a href="#" className="hover:text-pink-400 transition-colors">Instagram</a>
      <a href="#" className="hover:text-blue-400 transition-colors">Facebook</a>
      <a href="#" className="hover:text-blue-300 transition-colors">Twitter</a>
    </div>
  </div>
</footer>

</div>

     
      
    </div>
  );
};

export default Home;
