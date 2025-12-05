import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import UseCases from './components/UseCases';
import Testimonials from './components/Testimonials';
import Values from './components/Values';
import Footer from './components/Footer';
import ChatInterface from './components/ChatInterface';
import Pricing from './components/Pricing';

type View = 'landing' | 'chat';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('landing');

  // Smooth scroll behavior hack for older browsers or if CSS smooth-scroll fails
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  if (currentView === 'chat') {
    return <ChatInterface onBack={() => setCurrentView('landing')} />;
  }

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar onStartChat={() => setCurrentView('chat')} />
      <main>
        <Hero onStartChat={() => setCurrentView('chat')} />
        <HowItWorks />
        <Features />
        <UseCases />
        <Pricing />
        <Testimonials />
        <Values />
      </main>
      <Footer />
    </div>
  );
};

export default App;