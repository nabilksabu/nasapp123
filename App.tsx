
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturesGrid from './components/FeaturesGrid';
import Gallery from './components/Gallery';
import DataVizPlaceholder from './components/DataVizPlaceholder';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-[#0c0a1a] text-gray-200 min-h-screen overflow-x-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 z-0"></div>
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <FeaturesGrid />
          <Gallery />
          <DataVizPlaceholder />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
