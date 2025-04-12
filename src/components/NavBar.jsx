// src/components/Navbar.jsx
import { FaGithub } from 'react-icons/fa';
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-content">
        <h1 className="logo">InventoryPro</h1>
        <a 
          href="https://github.com/yourusername/inventory-tracker" 
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
        >
          <FaGithub className="github-icon" />
          View Code
        </a>
      </div>
    </header>
  );
}