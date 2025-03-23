import React from "react";
import { useParams, Link } from "react-router-dom";

import Project1 from "../assets/Pokemon.png";

const projects = [
  {
    id: 1,
    name: "Project Pokemoni",
    description: "Kratki opis o projektu Pokemoni",
    image: Project1,
    details:
      "Pokemon 2D igrica u kojoj biraš svoj početnog pokemona i ideš u avanturu s njim.",
    technologies: ["JavaScript", "CSS", "HTML", "Tiled"],
  },
  {
    id: 2,
    name: "Project 2",
    description: "Kratki opis o projektu 2",
    image: "/images/project2.jpg",
    details: "Detalji o drugom projektu.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 3,
    name: "Project 3",
    description: "Kratki opis o projektu 3",
    image: "/images/project3.jpg",
    details: "Detalji o trećem projektu.",
    technologies: ["React", "Node.js", "MongoDB"],
  },
];

function ProjectDetails() {
  const { id } = useParams();

  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return <div>Projekt nije pronađen</div>;
  }

  return (
    <div className="container mt-5">
      <h2>{project.name} - Detalji</h2>
      <div className="row">
        <div className="col-md-6">
          <img src={project.image} className="img-fluid" alt={project.name} />
        </div>
        <div className="col-md-6">
          <h3>Opis</h3>
          <p>{project.details}</p>
          <h3>Tehnologije</h3>
          <ul>
            {project.technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>
      </div>

      <Link to="/projects" className="btn btn-secondary mt-4">
        Nazad na projekte
      </Link>
    </div>
  );
}

export default ProjectDetails;
