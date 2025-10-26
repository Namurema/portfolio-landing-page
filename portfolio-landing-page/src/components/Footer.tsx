import { Github, Linkedin, Mail, Twitter, Heart, ArrowUp } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">Namurema Brendah</h3>
            <p className="footer-tagline">
              Building digital experiences that convert visitors into customers.
            </p>
            <div className="footer-social">
              <a
                href="https://github.com/Namurema"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/brenda-namurema-421119208/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com/CodesbyBibi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a href="mailto:namuremabrendah@gmail.com" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul className="footer-links">
              <li>Web Development</li>
              <li>UI/UX Design</li>
              <li>Full Stack Solutions</li>
              <li>Consulting</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Get In Touch</h4>
            <ul className="footer-links">
              <li>
                <a href="mailto:namuremabrendah@gmail.com">namuremabrendah@gmail.com</a>
              </li>
              <li>
                <a href="tel:+256701276477">+256 701 276 477</a>
              </li>
              <li>Uganda</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} Namurema Brendah. Made with <Heart size={16} className="heart" /> using React & TypeScript
          </p>
          <button className="scroll-top" onClick={scrollToTop} aria-label="Scroll to top">
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
