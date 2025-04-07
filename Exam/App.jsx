import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Login from "./login";
import Home from "./home";
import BookGallery from "./bookGallery";
import BookDetail from "./bookDetail";
import ProtectedRoute from "./protested"; 
import NavBar from "./navBar";

function App() {
  const isOutlet = !!localStorage.getItem("outlet");

  return (
    <Router>
      {isOutlet && <NavBar />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/books"
          element={
            <ProtectedRoute>
              <BookGallery />
            </ProtectedRoute>
          }
        />
        <Route
          path="/book/:id"
          element={
            <ProtectedRoute>
              <BookDetail />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
