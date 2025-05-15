
import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [flowers, setFlowers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  const [sort, setSort] = useState('name-asc');

  const fetchFlowers = async () => {
    try {
      setLoading(true);
      const response = await axios.get('https://mock-api-for-flowers.free.beeceptor.com/flowers');
      setFlowers(response.data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFlowers();
  }, []);

  const addFlower = async (flower) => {
    try {
      const response = await axios.post('https://mock-api-for-flowers.free.beeceptor.com/flowers', flower);
      setFlowers([...flowers, response.data]);
      return response.data;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const updateFlower = async (id, updatedFlower) => {
    try {
      const response = await axios.put(`https://mock-api-for-flowers.free.beeceptor.com/flowers/${id}`, updatedFlower);
      setFlowers(flowers.map(flower => flower.id === id ? response.data : flower));
      return response.data;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const deleteFlower = async (id) => {
    try {
      await axios.delete(`https://mock-api-for-flowers.free.beeceptor.com/flowers/${id}`);
      setFlowers(flowers.filter(flower => flower.id !== id));
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const filteredFlowers = flowers.filter(flower => {
    const matchesSearch = flower.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         flower.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === 'all' || flower.type === filter;
    return matchesSearch && matchesFilter;
  });

  const sortedFlowers = [...filteredFlowers].sort((a, b) => {
    const [sortBy, order] = sort.split('-');
    if (sortBy === 'name') {
      return order === 'asc' 
        ? a.name.localeCompare(b.name) 
        : b.name.localeCompare(a.name);
    } else {
      return order === 'asc' ? a.price - b.price : b.price - a.price;
    }
  });

  return (
    <AppContext.Provider value={{
      flowers: sortedFlowers,
      loading,
      error,
      searchTerm,
      setSearchTerm,
      filter,
      setFilter,
      sort,
      setSort,
      addFlower,
      updateFlower,
      deleteFlower,
      fetchFlowers
    }}>
      {children}
    </AppContext.Provider>
  );
};