import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home.jsx';
import CreateBook from './pages/CreateBook.jsx';
import EditBook from './pages/editBook.jsx';
import DeleteBook from './pages/deleteBook.jsx';
import ShowBook from './pages/showBook.jsx';
import AdminLogin from './pages/AdminLogin.jsx';

const App = () => {
  // State to manage isAdmin
  const [isAdmin, setIsAdmin] = useState(false);

  // Function to set isAdmin state
  const handleAdminLogin = (status) => {
    setIsAdmin(status);
  };

  return (
    <>
      <div className='flex justify-center align-top bg-red-400 py-2 text-rose-50'>Hi Just checking</div>
      <Routes>
        <Route path='/' element={<Home isAdmin={isAdmin} />} /> {/* Passing isAdmin as prop to Home */}
        <Route path='/books/create' element={<CreateBook />} />
        <Route path='/books/edit/:id' element={<EditBook />} />
        <Route path='/books/details/:id' element={<ShowBook />} />
        <Route path='/books/delete/:id' element={<DeleteBook />} />
        <Route path='/admin/login' element={<AdminLogin onAdminLogin={handleAdminLogin} />} /> {/* Passing handleAdminLogin as prop to AdminLogin */}
      </Routes>
    </>
  );
};

export default App;
