import { Routes, Route } from 'react-router-dom';
import Header from './Header.jsx';  
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Signup from './pages/Signup.jsx';
import Chocolatecake from './pages/recipes/Chocolatecake.jsx';
import Paella from './pages/recipes/Paella.jsx';
import CinnamonRolls from './pages/recipes/Cinnamonrolls.jsx';
import ShrimpSalad from './pages/recipes/Shrimpsalad.jsx';
import Yoghurtbowl from './pages/recipes/Yoghurtbowl.jsx';
import Pancake from './pages/recipes/Pancake.jsx';
import Parfait from './pages/recipes/Parfait.jsx';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/recipes/Cinnamonrolls" element={<CinnamonRolls />} />
        <Route path="/recipes/Shrimpsalad" element={<ShrimpSalad />} />
        <Route path="/recipes/Paella" element={<Paella />} />
        <Route path="/recipes/Chocolatecake" element={<Chocolatecake />} />
        <Route path='/recipes/Yoghurtbowl' element= {<Yoghurtbowl/>} />
        <Route path='/recipes/Pancake' element= {<Pancake/>} />
        <Route path='/recipes/Parfait' element= {<Parfait/>} />

  
      </Routes>
      <Footer />
    </>
  );
}

export default App;
