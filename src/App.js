import './App.css';
import FlipCard from './components/FlipCard';



// //import Society from './Society.js';
import Footer from './components/Footer';
import CardCarousel from './components/Carousel';
function App() {
  return (
    <div className="App">
      <CardCarousel/>
      <FlipCard/>
      <Footer/>
    </div>
  );
}

export default App;