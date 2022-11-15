import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Society from './pages/society';

import FlipCard from './components/FlipCard';
import Carousel from './components/Carousel';

import Footer from './components/Global/Footer';
import Header from './components/Global/Header';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<div className="App">
          <Header />
          <Carousel />
          <FlipCard />
          <Footer />
        </div>}
        />
        <Route path="/society/:slug" element={<Society />} />
      </Routes>
    </Router>
  );
}

export default App;