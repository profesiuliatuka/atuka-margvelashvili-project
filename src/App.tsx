import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from './components/MainLayout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Team } from './pages/Team';
import { News } from './pages/News';
import { Contact } from './pages/Contact';
import { ScrollToTop } from './components/ScrollToTop';
import { Matches } from './pages/Matches';
import { NotFound } from './pages/NotFound';
import { Terms } from './pages/Terms';
import { Privacy } from './pages/Privacy';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/news" element={<News />} />
          <Route path="/about" element={<About />} />
          <Route path="/Matches" element={<Matches />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;