import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton';
import MobileQuickBar from './components/MobileQuickBar';
import ScrollToTop from './components/ScrollToTop';
import ErrorBoundary from './components/ErrorBoundary';
import LoadingSplashScreen from './components/LoadingSplashScreen';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PropertiesPage from './pages/PropertiesPage';
import PropertyDetailPage from './pages/PropertyDetailPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <ErrorBoundary>
      <LoadingSplashScreen />
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-slate-950 selection:text-white pb-16 sm:pb-0">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/properties" element={<PropertiesPage />} />
              <Route path="/properties/:id" element={<PropertyDetailPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<HomePage />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppFloatingButton />
          <MobileQuickBar />
        </div>
      </Router>
    </ErrorBoundary>
  );
}
