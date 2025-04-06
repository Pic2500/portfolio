function Projects() {
  return (
    <div className="container mt-5 fade-in-up">
      <h1 className="text-center mb-4">My Projects</h1>
      <div className="row">
        {projects.map((project) => (
          <div key={project.id} className="col-md-6 mb-5">
            <div className="card shadow-lg border-0">
              <img
                src={project.image}
                className="card-img-top project-img"
                alt={project.name}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{project.name}</h5>
                <p className="card-text">{project.description}</p>
                <Link
                  to={`/project-details/${project.id}`}
                  className="btn btn-primary"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
