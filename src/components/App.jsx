import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';
import { BooksPage } from './pages/BooksPage/BooksPage';
import { ClienPage } from './pages/ClientPage/ClienPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/books" element={<BooksPage />} />
      <Route path="/client" element={<ClienPage />} />
    </Routes>
  );
};
export default App;
