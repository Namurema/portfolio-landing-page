import './About.css';
import profileImage from '../assets/brendah.jpg';

const About = () => {
  const skills = [
    { name: 'JavaScript', level: 5 },
    { name: 'React.ts', level: 5 },
    { name: 'Node.js', level: 4 },
    { name: 'Express.js', level: 4 },
    { name: 'MongoDB', level: 4 },
    { name: 'PostgreSQL', level: 4 },
    { name: 'Python', level: 4 },
    { name: 'Django', level: 4 },
    { name: 'TypeScript', level: 4 },
    { name: 'UI/UX Design', level: 5 },
    { name: 'Tailwind CSS', level: 5 },
    { name: 'Git & GitHub', level: 5 },
  ];

  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">About Me</h2>
            <p className="about-description">
              I'm a passionate Full Stack Developer with a keen eye for design and a drive to create 
              impactful digital experiences. With expertise in both MERN and PERN stacks, along with 
              Python and Django, I build scalable web applications that not only look great but also 
              deliver real value to businesses.
            </p>
            <p className="about-description">
              My approach combines technical excellence with creative problem-solving. I specialize in 
              crafting intuitive user interfaces and robust backend systems that help businesses convert 
              visitors into loyal customers. Every project is an opportunity to push boundaries and 
              deliver exceptional results.
            </p>

            <div className="skills-section">
              <h3>My Skills</h3>
              <div className="skills-grid">
                {skills.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <span className="skill-name">{skill.name}</span>
                    <div className="skill-dots">
                      {[1, 2, 3, 4, 5].map((dot) => (
                        <span
                          key={dot}
                          className={`dot ${dot <= skill.level ? 'filled' : ''}`}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="about-image">
            <div className="image-container">
              <div className="image-placeholder">
                <img src={profileImage} alt="Namurema Brendah" />
              </div>
              <div className="image-accent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
