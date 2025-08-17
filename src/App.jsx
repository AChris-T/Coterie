import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './commons/Footer';
import OurService from './pages/OurService';
import Porfolio from './pages/Porfolio';
import Wedding from './pages/Wedding';
import Bootcamp from './pages/Bootcamp';
import Dinner from './pages/Dinner';
import Journal from './pages/Journal';
import JournalDetail from './pages/JournalDetail';
import ContatctUs from './pages/ContatctUs';
import ScrollToTop from './hooks/ScrollToTop';
import Events from './pages/Events';
import Consulting from './pages/Consulting';
import CCEEvents from './pages/CCEEvents';

function App() {
  return (
    <div>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/services" element={<OurService />} />
        <Route path="/portfolio" element={<Porfolio />} />
        <Route path="/wedding" element={<Wedding />} />
        <Route path="/bootcamp" element={<Bootcamp />} />
        <Route path="/workers-dinner" element={<Dinner />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/journal/:id" element={<JournalDetail />} />
        <Route path="/contact-us" element={<ContatctUs />} />
        <Route path="/events" element={<Events />} />
        <Route path="/consulting" element={<Consulting />} />
        <Route path="/cultural-events" element={<CCEEvents />} />
        <Route path="/cultural-events" element={<CCEEvents />} />

        {/* <Route path="/staff-retention" element={<Staff />} />
        <Route path="/emotional-intelligence" element={<Emotional />} />
        <Route path="/outstanding" element={<Outstanding />} />
        <Route path="/testimonials" element={<Testimonials />} /> */}
      </Routes>
      <Footer />{' '}
    </div>
  );
}

export default App;
