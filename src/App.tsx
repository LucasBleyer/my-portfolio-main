import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Email from './pages/Home/sections/Email/Email';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/my-portfolio-dev-lucas-bleyer" element={<Home />} />
        <Route path="/contact" element={<Email />} />
      </Routes>
    </Router>
  );
}

export default App;