import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { MainLayout } from './components/MainLayout';
import { ScrollToTop } from './components/ScrollToTop';

const Home = lazy(() => import('./pages/Home').then(module => ({ default: module.Home })));
const About = lazy(() => import('./pages/About').then(module => ({ default: module.About })));
const Team = lazy(() => import('./pages/Team').then(module => ({ default: module.Team })));
const News = lazy(() => import('./pages/News').then(module => ({ default: module.News })));
const Contact = lazy(() => import('./pages/Contact').then(module => ({ default: module.Contact })));
const Matches = lazy(() => import('./pages/Matches').then(module => ({ default: module.Matches })));
const NotFound = lazy(() => import('./pages/NotFound').then(module => ({ default: module.NotFound })));
const Terms = lazy(() => import('./pages/Terms').then(module => ({ default: module.Terms })));
const Privacy = lazy(() => import('./pages/Privacy').then(module => ({ default: module.Privacy })));

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="w-10 h-10 border-4 border-emerald-500/20 border-t-emerald-500 rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <MainLayout>
        <Suspense fallback={<PageLoader />}>
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
        </Suspense>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;