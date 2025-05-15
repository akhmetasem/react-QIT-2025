
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="hidden md:flex space-x-6">
      <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
        Home
      </Link>
      <Link to="/dashboard" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
        Dashboard
      </Link>
    </nav>
  );
};

export default Navbar;