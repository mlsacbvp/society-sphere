import './css/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Society from './pages/society';

import CardsList from './components/CardsList';
import Slider from './components/Carousel/index.js';

import Footer from './components/Global/Footer';
import Header from './components/Global/Header';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<div className="App">
          <Header />
          <Slider />
          <CardsList />
          <Footer />
        </div>}
        />
        <Route path="/society/:slug" element={<Society />} />
      </Routes>
    </Router>
  );
}

export default App;