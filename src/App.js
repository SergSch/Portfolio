import { Route, Routes } from 'react-router-dom';

import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import SkillsPage from './pages/SkillsPage/SkillsPage';
import Header from './components/Header/Header';
import RecipesPage from './pages/RecipesPage/RecipesPage';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/recipes" element={<RecipesPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
