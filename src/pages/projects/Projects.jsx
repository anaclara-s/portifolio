import { useState } from 'react';
import { FaGithub, FaLinkedin, FaExternalLinkAlt } from 'react-icons/fa';

import ProjectsImagesVideos from './ProjectsImagesVideos';
import './Projects.css';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [hoveredProject, setHoveredProject] = useState(null);

    return (
        <div className='projects-container'>
            <h2 className='title-projects'>Projetos</h2>

            <div className="projects-grid">
                {ProjectsImagesVideos.map(project => (
                    <div
                        key={project.id}
                        className={`project-card ${hoveredProject === project.id ? 'hovered' : ''}`}
                        onMouseEnter={() => setHoveredProject(project.id)}
                        onMouseLeave={() => setHoveredProject(null)}
                        onClick={() => setSelectedProject(project)}
                    >
                        <div className="project-image-container">
                            <img
                                src={`/src/assets/projects/images/${project.image}`}
                                alt={project.title}
                                className="project-image"
                            />
                            <div className="project-overlay">
                                <h3>{project.title}</h3>
                                <div className="project-icons">
                                    <FaGithub className="icon" />
                                    <FaLinkedin className="icon" />
                                    <FaExternalLinkAlt className="icon" />
                                </div>
                            </div>
                        </div>
                        {(hoveredProject === project.id) && (
                            <div className="project-info">
                                <h3>{project.title}</h3>
                                <div className="project-icons">
                                    <FaGithub className="icon" />
                                    <FaLinkedin className="icon" />
                                    <FaExternalLinkAlt className="icon" />
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {selectedProject && (
                <div className="project-modal">
                    <div className="modal-content">
                        <button className="close-modal" onClick={() => setSelectedProject(null)}>
                            &times;
                        </button>

                        <div className="modal-body">
                            <div className="modal-video">
                                <video controls>
                                    <source src={`/src/assets/projects/videos/${selectedProject.video}`} type="video/mp4" />
                                    Seu navegador não suporta vídeos HTML5.
                                </video>
                            </div>

                            <div className="modal-description">
                                <h3>{selectedProject.title}</h3>
                                <p>{selectedProject.description}</p>
                                <div className="project-tools">
                                    <h4>Ferramentas utilizadas:</h4>
                                    <ul>
                                        {selectedProject.tags.map((tag, index) => (
                                            <li key={index}>{tag}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="project-footer">
                                    <p className="project-date">{selectedProject.date}</p>
                                    <div className="modal-links">
                                        <a href={selectedProject.links.repo} target="_blank" rel="noopener noreferrer">
                                            <button className="project-button">
                                                <FaGithub />Repositorio
                                            </button>
                                        </a>
                                        <a href={selectedProject.links.linkedin} target="_blank" rel="noopener noreferrer">
                                            <button className="project-button">
                                                <FaLinkedin />Linkedin
                                            </button>
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Projects;