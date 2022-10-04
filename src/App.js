import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';


import Society from './Society.js';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/Society' element={<Society />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;