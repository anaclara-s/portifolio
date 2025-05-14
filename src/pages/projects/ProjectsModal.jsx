import { FaGithub, FaLinkedin, FaFileDownload } from 'react-icons/fa';

const ProjectModal = ({ project, onClose }) => {
  return (
    <div className="project-modal">
      <div className="modal-content">
        <button className="close-modal" onClick={onClose}>&times;</button>

        <div className="modal-body">
          <div className="modal-video">
            <video controls>
              <source
                src={project.video}
                type="video/mp4"
              />
              Seu navegador não suporta vídeos HTML5.
            </video>
          </div>

          <div className="modal-title">
            <h3>{project.title}</h3>

            {Array.isArray(project.description) ? (
              project.description.map((text, index) => (
                <p key={index} className="project-paragraph">{text}</p>
              ))
            ) : (
              <p className="project-paragraph">{project.description}</p>
            )}

            <div className="project-tools">
              <h4>Ferramentas utilizadas</h4>
              <ul>
                {project.tags.map((tag, index) => (
                  <li key={index}>{tag}</li>
                ))}
              </ul>
            </div>

            <div className="project-footer">
              <div className="modal-links">
                <a href={project.links.repo} target="_blank" rel="noopener noreferrer">
                  <button className="project-button">
                    <FaGithub /> Repositório
                  </button>
                </a>
                <a href={project.links.linkedin} target="_blank" rel="noopener noreferrer">
                  <button className="project-button">
                    <FaLinkedin /> LinkedIn
                  </button>
                </a>
                <a href={project.links.apk} target="_blank" rel="noopener noreferrer">
                  <button className="project-button">
                    <FaFileDownload /> APK
                  </button>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
