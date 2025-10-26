import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              Hi, I am <span className="highlight">Namurema Brendah</span>
            </h1>
            <p className="hero-description">
              I love coding & creating.
              <br />
              I am a <span className="highlight">Full Stack Developer</span>
            </p>
            <p className="hero-tagline">
              Expert in UI/UX design. I provide solutions to clients and build sites that convert visitors into customers.
            </p>
            <p className="tech-stack">
              <strong>Tech Stack:</strong> MERN • PERN • Python with Django
            </p>
            
            <div className="social-links">
              <a href="https://github.com/Namurema" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/brenda-namurema-421119208/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin size={24} />
              </a>
              <a href="https://twitter.com/CodesbyBibi" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter size={24} />
              </a>
              <a href="mailto:namuremabrendah@gmail.com" aria-label="Email">
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="letter-n">N</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
