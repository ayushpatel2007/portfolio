import React from 'react';
import { X, ExternalLink, Github, Cpu, Award } from 'lucide-react';
import { useScene } from '../../context/SceneContext';
import { useAudio } from '../../context/AudioContext';

const ProjectModal = () => {
  const { activeModalProject, setActiveModalProject } = useScene();
  const { playClickSound } = useAudio();

  if (!activeModalProject) return null;

  const handleClose = () => {
    playClickSound();
    setActiveModalProject(null);
  };

  const {
    name,
    category,
    tagline,
    description,
    features,
    technologies,
    github,
    liveDemo,
    hackathon,
    team,
    subProjects
  } = activeModalProject;

  return (
    <div className="project-modal-backdrop" onClick={handleClose}>
      <div className="project-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={handleClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <div className="modal-header">
          <span className="modal-category">
            {hackathon ? `🏆 ${hackathon}` : category}
          </span>
          <h2 className="modal-title">{name}</h2>
          {team && <span className="modal-team">Team: {team}</span>}
          <p className="modal-tagline">{tagline}</p>
        </div>

        <div className="modal-body">
          <p className="modal-description">{description}</p>

          {/* Sub-projects list for Robotics Systems */}
          {subProjects && subProjects.length > 0 && (
            <div className="modal-section">
              <h3><Cpu size={16} /> Physical Robotics Sub-Systems</h3>
              <div className="subprojects-grid">
                {subProjects.map((sub, i) => (
                  <div key={`sub-${i}`} className="subproject-card">
                    <h4>{sub.name}</h4>
                    <p className="sub-tech">{sub.tech}</p>
                    <p className="sub-desc">{sub.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Features */}
          {features && features.length > 0 && (
            <div className="modal-section">
              <h3>Key Features & Capabilities</h3>
              <ul className="features-list">
                {features.map((feat, idx) => (
                  <li key={`feat-${idx}`}>{feat}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Technology Badges */}
          {technologies && (
            <div className="modal-section">
              <h3>Technology Stack</h3>
              <div className="tech-badges">
                {technologies.map((tech, idx) => (
                  <span key={`tech-${idx}`} className="tech-badge">{tech}</span>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="modal-footer">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-github"
              onClick={() => playClickSound()}
            >
              <Github size={18} /> View GitHub Repository
            </a>
          )}
          {liveDemo && (
            <a
              href={liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-demo"
              onClick={() => playClickSound()}
            >
              <ExternalLink size={18} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
