import { Route, Routes } from 'react-router-dom';

import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import Header from './components/Header/Header';
import RecipesPage from './pages/RecipesPage/RecipesPage';
import QuizPage from './pages/QuizPage/QuizPage';
import WeatherPage from './pages/WeatherPage/WeatherPage';
import { FaAnglesUp } from 'react-icons/fa6';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const scrollButton = document.querySelector('.scroll-to-top');
    window.addEventListener('scroll', () => {
      if(window.scrollY > 100) {
        scrollButton.classList.remove('d-none');
      } else {
        scrollButton.classList.add('d-none')
      }
    })
  });
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/weather" element={<WeatherPage />} />
        <Route path="/recipes" element={<RecipesPage />} />
      </Routes>
      <Footer />
      <button
        className="scroll-to-top"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        <FaAnglesUp />
      </button>
    </div>
  );
}

export default App;
