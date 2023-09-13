import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import {
  AboutPage,
  BlogPage,
  ContactPage,
  Landing,
  ServicesPage
} from './pages';
import ScrollToTop from './utils/ScrollToTop';
import { Loader } from './components';

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
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/services" element={<ServicesPage />} />
        </Routes>
      )}
    </>
  );
}
