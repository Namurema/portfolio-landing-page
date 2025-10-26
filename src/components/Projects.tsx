import { ExternalLink, Github } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description:
        'Platform for online shopping that scales app-wide based on mobile web devices with cross-platform like mobile, desktop, web browser, web performance, single page application, analytics, monitoring.',
      techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS'],
      image: '/project-placeholder.jpg',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 2,
      title: 'Task Management Dashboard',
      description:
        'A comprehensive task management system with real-time updates, team collaboration features, and advanced analytics. Built with modern tech stack for optimal performance.',
      techStack: ['React', 'TypeScript', 'PostgreSQL', 'Node.js', 'Redux'],
      image: '/project-placeholder.jpg',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 3,
      title: 'Social Media Analytics Tool',
      description:
        'Advanced analytics platform for social media marketers. Features real-time data visualization, automated reporting, and AI-powered insights to boost engagement.',
      techStack: ['Python', 'Django', 'React', 'PostgreSQL', 'Chart.js'],
      image: '/project-placeholder.jpg',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 4,
      title: 'Real Estate Booking System',
      description:
        'Developed a powerful react native platform to integrate with existing native ios and android apps. Hybrid approach to store fully featured HTML flow into native for SEO with good real flexibility.',
      techStack: ['React Native', 'Node.js', 'MongoDB', 'Express', 'AWS'],
      image: '/project-placeholder.jpg',
      liveUrl: '#',
      githubUrl: '#',
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">
          A showcase of my recent work - from e-commerce platforms to data analytics tools
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label="View Live Project"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label="View on GitHub"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
