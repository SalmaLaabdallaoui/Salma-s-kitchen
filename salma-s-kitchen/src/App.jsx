import { Routes, Route } from 'react-router-dom'; // Import the Routes and Route components
import Header from './Header.jsx'; // Import the Header component
import Footer from './components/Footer.jsx'; // Import the Footer component
import Home from './pages/Home.jsx'; // Import the Home component
import About from './pages/About.jsx'; // Import the About component
import Contact from './pages/Contact.jsx'; // Import the Contact component
import Signup from './pages/Signup.jsx'; // Import the Signup component
import Chocolatecake from './pages/recipes/Chocolatecake.jsx'; // Import the Chocolatecake component
import Paella from './pages/recipes/Paella.jsx'; // Import the Paella component
import CinnamonRolls from './pages/recipes/Cinnamonrolls.jsx'; // Import the CinnamonRolls component
import ShrimpSalad from './pages/recipes/Shrimpsalad.jsx'; // Import the ShrimpSalad component
import Yoghurtbowl from './pages/recipes/Yoghurtbowl.jsx'; // Import the Yoghurtbowl component
import Pancake from './pages/recipes/Pancake.jsx'; // Import the Pancake component
import Parfait from './pages/recipes/Parfait.jsx'; // Import the Parfait component

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
