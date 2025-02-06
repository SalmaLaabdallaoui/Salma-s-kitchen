import { useState } from "react"; // Import the useState hook
import { Link } from "react-router-dom"; // Import the Link component
import { Menu, X } from "lucide-react"; // Import the burger Menu icons
import SearchBox from "./components/Searchbox"; // Import the reusable component

// Create the Header component
function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <div className="header-container">
        <img src="/images/Logo.jpg" alt="Logo" />

        
        <button className="menu-button" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <nav className="navigation-bar">
          <ul className="home-bar">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li>
              <a
                href="https://www.instagram.com/salma_s_kitchen/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
          </ul>
        </nav>

        {/* Use the reusable SearchBox component */}
        <SearchBox />
      </div>

      {isOpen && (
        // Create the mobile menu
        <ul className="mobile-menu">
          <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
          <li>
            <a
              href="https://www.instagram.com/salma_s_kitchen/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
            >
              Instagram
            </a>
          </li>
        </ul>
      )}
        
      {/* Add the sign-up inbox */}
      <div className="sign-up-inbox">
        <span>
          Join our newsletter and get our most recent recipes! <Link to="/signup">SIGN UP</Link>
        </span>
      </div>
    </header>
  );
}

export default Header;
