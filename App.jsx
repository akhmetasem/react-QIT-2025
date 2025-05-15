import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Details from './pages/Details';
import NewFlower from './pages/NewFlower';
import EditFlower from './pages/EditFlower';

function App() {
  return (
    <Router>
      <ThemeProvider>
        <AppProvider>
          <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
            <Header />
            <main className="container mx-auto px-4 py-8">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/flowers/:id" element={<Details />} />
                <Route path="/flowers/new" element={<NewFlower />} />
                <Route path="/flowers/edit/:id" element={<EditFlower />} />
              </Routes>
            </main>
          </div>
        </AppProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
