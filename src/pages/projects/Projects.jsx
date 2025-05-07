import { useState } from 'react';

import ProjectModal from './ProjectsModal';
import ProjectCard from './ProjectsCard';
import ProjectsImagesVideos from './ProjectsImagesVideos';
import './Projects.css';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="projects-container" data-aos="fade-right">
      <h2 className="title-projects">Projetos</h2>

      <div className="projects-grid">
        {ProjectsImagesVideos.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </div>
  );
};

export default Projects;