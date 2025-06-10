import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ThingsToDo from './components/ThingsToDo';
import PlacesToStay from './components/PlacesToStay';
import Dining from './components/Dining';
import Events from './components/Events';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './chatbot/Chatbot';


function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <ThingsToDo />
      <PlacesToStay />
      <Dining />
      <Events />
      <About />
      <Contact />
      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;