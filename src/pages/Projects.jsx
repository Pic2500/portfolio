import React from "react";
import { Link } from "react-router-dom";

import Project1 from "../assets/Pokemon.png";
import Project2 from "../assets/Film.png";
import Project3 from "../assets/Zaposlenici.png";
import Project4 from "../assets/Chuck.png";

const projects = [
  {
    id: 1,
    name: "Project Pokemon",
    image: Project1,
  },
  {
    id: 2,
    name: "Movie Review App",
    image: Project2,
  },
  {
    id: 3,
    name: "Employee Management System",

    image: Project3,
  },
  {
    id: 4,
    name: "Chuck Norris Joke Search",
    image: Project4,
  },
];

function Projects() {
  return (
    <div className="mt-5">
      <h1 className="text-center mb-4 fade-in-up">My Projects</h1>
      <div className="row">
        {projects.map((project) => (
          <div key={project.id} className="col-md-6 mb-5 fade-in-up">
            <div className="card shadow-lg border-0">
              <img
                src={project.image}
                className="card-img-top project-img"
                alt={project.name}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{project.name}</h5>

                <Link
                  to={`/project-details/${project.id}`}
                  className="btn btn-warning"
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

export default Projects;
