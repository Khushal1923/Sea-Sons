import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroVideo from './components/HeroVideo';
import AboutAmbiance from './components/AboutAmbiance';
import InstagramReelSection from './components/InstagramReelSection';
import InteractiveMenu from './components/InteractiveMenu';
import PhotoGallery from './components/PhotoGallery';
import CustomerReviews from './components/CustomerReviews';
import LocationMap from './components/LocationMap';
import Footer from './components/Footer';
import ReservationModal from './components/ReservationModal';
import ReelPlayerModal from './components/ReelPlayerModal';
import TrayDrawer from './components/TrayDrawer';

export default function App() {
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [isReelModalOpen, setIsReelModalOpen] = useState(false);
  const [isTrayOpen, setIsTrayOpen] = useState(false);
  const [tray, setTray] = useState([]);

  // Tray management
  const handleAddToTray = (item) => {
    setTray((prevTray) => {
      const existing = prevTray.find((t) => t.id === item.id);
      if (existing) {
        return prevTray.map((t) =>
          t.id === item.id ? { ...t, quantity: t.quantity + 1 } : t
        );
      }
      return [...prevTray, { ...item, quantity: 1 }];
    });
  };

  const handleRemoveFromTray = (itemId) => {
    setTray((prevTray) => {
      const existing = prevTray.find((t) => t.id === itemId);
      if (existing.quantity === 1) {
        return prevTray.filter((t) => t.id !== itemId);
      }
      return prevTray.map((t) =>
        t.id === itemId ? { ...t, quantity: t.quantity - 1 } : t
      );
    });
  };

  const handleClearTray = () => {
    setTray([]);
  };

  const totalTrayCount = tray.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#121A20] selection:bg-[#2B6B67] selection:text-white">
      
      {/* Floating Header Navbar */}
      <Navbar
        onOpenReservation={() => setIsReservationOpen(true)}
        trayCount={totalTrayCount}
        onOpenTray={() => setIsTrayOpen(true)}
      />

      <main>
        {/* Fullscreen Video Hero Section */}
        <HeroVideo
          onOpenReservation={() => setIsReservationOpen(true)}
          onOpenReelModal={() => setIsReelModalOpen(true)}
        />

        {/* Cafe Architecture & Ambiance Showcase */}
        <AboutAmbiance
          onOpenGallery={() => {
            const el = document.getElementById('gallery');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Instagram Reel Spotlight */}
        <InstagramReelSection
          onOpenReelModal={() => setIsReelModalOpen(true)}
        />

        {/* Filterable & Searchable Menu */}
        <InteractiveMenu
          tray={tray}
          onAddToTray={handleAddToTray}
          onRemoveFromTray={handleRemoveFromTray}
          onOpenTray={() => setIsTrayOpen(true)}
        />

        {/* Real Cafe Photos Lightbox Gallery */}
        <PhotoGallery />

        {/* Customer Reviews & Google Score */}
        <CustomerReviews />

        {/* Location & Opening Hours */}
        <LocationMap
          onOpenReservation={() => setIsReservationOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenReservation={() => setIsReservationOpen(true)}
      />

      {/* Modals & Drawers */}
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
      />

      <ReelPlayerModal
        isOpen={isReelModalOpen}
        onClose={() => setIsReelModalOpen(false)}
      />

      <TrayDrawer
        isOpen={isTrayOpen}
        onClose={() => setIsTrayOpen(false)}
        tray={tray}
        onAddToTray={handleAddToTray}
        onRemoveFromTray={handleRemoveFromTray}
        onClearTray={handleClearTray}
      />

    </div>
  );
}
