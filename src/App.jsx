import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './pages/Header';
import Home from './pages/Home';
import About from './pages/About';
import SportsAcademy from './pages/SportsAcademy';
import FitnessClub from './pages/FitnessClub';
import Coliving from './pages/Coliving';
import Footer from './pages/Footer';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      {/* The min-h-screen and flex-col classes ensure the 
        Footer stays at the bottom of the viewport 
      */}
      <div className="min-h-screen flex flex-col bg-zinc-950">
        <Header />

        {/* 1. flex-grow: pushes footer to bottom
          2. px-0 lg:px-24: matches Header/Footer alignment
          3. max-w-7xl mx-auto: keeps content centered on huge screens
        */}
        <main class="flex-grow px-4 sm:px-8 md:px-16 w-full max-w-7xl mx-auto mt-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/sports-academy" element={<SportsAcademy />} />
            <Route path="/fitness-club" element={<FitnessClub />} />
            <Route path="/coliving" element={<Coliving />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;