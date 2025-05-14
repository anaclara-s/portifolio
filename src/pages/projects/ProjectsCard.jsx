import TechIcons from './TechIcons';

const ProjectCard = ({ project, onClick }) => {
  return (
    <div className="project-card" onClick={onClick}>
      <div className="project-image-container">
        <img
          src={project.image}
          alt={project.title}
          className="project-image"
        />
        <div className="project-overlay">
          <h3>{project.title}</h3>
          <div className="project-icons">
            <TechIcons tags={project.tags} />
          </div>
        </div>
      </div>
      <div className="project-info">
        <h3>{project.title}</h3>
        <div className="project-icons">
          <TechIcons tags={project.tags} />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
