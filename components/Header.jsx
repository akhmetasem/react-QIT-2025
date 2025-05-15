
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
          Bloom & Grow
        </Link>
        <div className="flex items-center space-x-4">
          <Navbar />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;