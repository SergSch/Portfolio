import { Route, Routes } from 'react-router-dom';

import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import Header from './components/Header/Header';
import RecipesPage from './pages/RecipesPage/RecipesPage';
import QuizPage from './pages/QuizPage/QuizPage';
import WeatherPage from './pages/WeatherPage/WeatherPage';

function App() {
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
    </div>
  );
}

export default App;
