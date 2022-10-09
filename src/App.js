import './App.css';
import FlipCard from './components/FlipCard';



// //import Society from './Society.js';
import Footer from './components/Footer';
import Carousel from './components/Carousel';
function App() {
  return (
    <div className="App">
      <Carousel/>
      <FlipCard/>
      <Footer/>
    </div>
  );
}

export default App;