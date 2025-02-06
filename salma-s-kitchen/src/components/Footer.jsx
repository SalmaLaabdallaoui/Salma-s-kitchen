import { Link } from "react-router-dom";
import SearchBox from "./Searchbox"; // Import the reusable component

function Footer() {
  return (
    <footer className="site-footer"> 
      <div className="footer-search"> 
        <h3>Check out our recipes!</h3>
        
        {/* Use the reusable SearchBox component */}
        <SearchBox />
      </div>

    
      <div className="footer-links"> 
        <ul>
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
      </div>

      <div className="footer-copyright"> 
        <img
          src="/images/DarkLogo.jpg"
          alt="Logo"
          className="footer-logo"
        />
        <p>©2025 Salma's Kitchen. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
