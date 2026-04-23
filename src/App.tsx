import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from './components/MainLayout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Team } from './pages/Team';
import { News } from './pages/News';
import { Contact } from './pages/Contact';
import { ScrollToTop } from './components/ScrollToTop';
import { Matches } from './pages/Matches';

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
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;