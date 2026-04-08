import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from './components/MainLayout';

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<div className="text-white p-10 text-center text-2xl">მთავარი გვერდის შიგთავსი იქნება აქ</div>} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;