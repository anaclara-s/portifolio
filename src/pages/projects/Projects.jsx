import { useState } from 'react';
import { FaGithub, FaLinkedin, FaFileDownload, } from 'react-icons/fa';
import { FaNodeJs, FaDartLang, FaFlutter, } from "react-icons/fa6";
import { DiPostgresql } from "react-icons/di";
import { SiMobx } from "react-icons/si";

import ProjectsImagesVideos from './ProjectsImagesVideos';
import './Projects.css';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const techIcons = {
        "Dart": <FaDartLang />,
        "Flutter": <FaFlutter />,
        "Node.js": <FaNodeJs />,
        "PostgreSQL": <DiPostgresql />,
        "MobX": <SiMobx />,
    };

    return (
        <div className='projects-container' data-aos="fade-right">
            <h2 className='title-projects'>Projetos</h2>

            <div className="projects-grid">
                {ProjectsImagesVideos.map(project => (
                    <div
                        key={project.id}
                        className="project-card"
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
                                    {project.tags.map((tag, index) => (
                                        <span key={index} className='tech-icon' title={tag}>
                                            {techIcons[tag]}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="project-info">
                            <h3>{project.title}</h3>
                            <div className="project-icons">
                                {project.tags.map((tag, index) => (
                                    <span key={index} className='tech-icon' title={tag}>
                                        {techIcons[tag]}
                                    </span>
                                ))}
                            </div>
                        </div>
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

                            <div className="modal-title">
                                <h3>{selectedProject.title}</h3>

                                {Array.isArray(selectedProject.description) ? (
                                    selectedProject.description.map((para, index) => (
                                        <p key={index} className="project-paragraph">{para}</p>
                                    ))
                                ) : (
                                    <p className="project-paragraph">{selectedProject.description}</p>
                                )}


                                <div className="project-tools">
                                    <h4>Ferramentas utilizadas</h4>
                                    <ul>
                                        {selectedProject.tags.map((tag, index) => (
                                            <li key={index}>{tag}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="project-footer">
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
                                        <a href={selectedProject.links.apk} target="_blank" rel="noopener noreferrer">
                                            <button className="project-button">
                                                <FaFileDownload />APK
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