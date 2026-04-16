import { BrowserRouter, Routes, Route } from 'react-router-dom';

// 1. Import your REAL Navbar and Footer here!
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// 2. Import your pages
import Home from './Home';
import AboutUs from './AboutUs';
import Commercial from './Commercial';
import Residential from './Residential';
import CheckReadiness from './CheckReadiness';
import ContactUs from './ContactUs';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        {/* 3. The REAL Navbar sits permanently at the top */}
        <Navbar />

        {/* 4. The pages swap out in the middle */}
        <main className="flex-grow pt-32 px-8 md:px-12 max-w-7xl mx-auto w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/commercial" element={<Commercial />} />
            <Route path="/residential" element={<Residential />} />
            <Route path="/readiness" element={<CheckReadiness />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </main>

        {/* 5. The REAL Footer sits permanently at the bottom */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;