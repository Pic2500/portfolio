return (
  <div className="container mt-5 fade-in-up">
    <h2>{project.name} - Details</h2>
    <div className="row">
      <div className="col-md-6">
        <img
          src={project.image}
          className="img-fluid project-image"
          alt={project.name}
        />
      </div>
      <div className="col-md-6">
        <h3>Description</h3>
        <p>{project.details}</p>
        <h3>Technologies Used</h3>
        <ul>
          {project.technologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>

        {project.github && (
          <a
            href={project.github}
            className="btn btn-dark mt-3"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        )}
      </div>
    </div>

    <Link to="/projects" className="btn btn-secondary mt-4">
      Back to Projects
    </Link>
  </div>
);
