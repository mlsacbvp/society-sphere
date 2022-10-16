import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FlipCard from './components/FlipCard';
import Society from './Society';
import Footer from './components/Footer'
import Carousel from './components/Carousel'
import Header from './components/Header';


function App() {
  return (
      <Router>
        <Routes>
          <Route exact path='/' element={<div className="App">
                  <Header/>
                  {/* <Carousel/> */}
                  <FlipCard/>
                  <Footer/> 
            </div>} 
          />
          <Route path="/society/:slug" element={<Society/>}/>
        </Routes>
      </Router>
  );
}

export default App;