import React from "react";
import { Link } from "react-router-dom";

import Project1 from "../assets/Pokemon.png";

const projects = [
  {
    id: 1,
    name: "Project Pokemoni",
    description: "Pokemoni 2D igrica",
    image: Project1,
  },
  {
    id: 2,
    name: "Project 2",
    description: "A brief description of Project 2",
    image: "/images/project2.jpg",
  },
  {
    id: 3,
    name: "Project 3",
    description: "A brief description of Project 3",
    image: "/images/project3.jpg",
  },
];

function Projects() {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">My Projects</h2>
      <div className="row">
        {projects.map((project) => (
          <div key={project.id} className="col-md-4 mb-4">
            <div className="card">
              <img
                src={project.image}
                className="card-img-top"
                alt={project.name}
              />
              <div className="card-body">
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

export default Projects;
