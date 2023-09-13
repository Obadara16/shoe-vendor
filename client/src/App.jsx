import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import {
  AboutPage,
  ContactPage,
  Landing,
  Shoes
} from './pages';
import ScrollToTop from './utils/ScrollToTop';
import { Loader } from './components';
import { AddShoe, AdminShoeList, Login } from './admin';

export default function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [location.pathname]);

  return (
    <>
      <ScrollToTop />
      {loading ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/shoes" element={<Shoes />} />
          <Route path="/restricted-login" element={<Login />} />
          <Route path="/admin" element={<AdminShoeList />} />
          <Route path="/admin/add" element={<AddShoe />} />
        </Routes>
      )}
    </>
  );
}
