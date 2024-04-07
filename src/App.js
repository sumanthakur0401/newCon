import './App.css';
import { FaUser, FaCogs, FaCode, FaEnvelope, FaFileAlt } from 'react-icons/fa';

function App() {
  return (
    <section className="mainSec">
      <nav className="navBar">
        <p className="navName">@sumanThakur</p>
        <div className="navButtons">
          <a href=""><FaUser class="navIcon"/> about</a>
          <a href=""><FaCogs class="navIcon"/> services</a>
          <a href=""><FaCode class="navIcon"/> projects</a>
          <a href=""><FaEnvelope class="navIcon"/> contact</a>
          <a href=""><FaFileAlt class="navIcon"/> resume</a>
        </div>
      </nav>
    </section>
  );
}

export default App;
