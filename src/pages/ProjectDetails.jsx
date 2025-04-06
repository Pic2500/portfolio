import React from "react";
import { useParams, Link } from "react-router-dom";

import Project1 from "../assets/Pokemon.png";
import Project2 from "../assets/Film.png";
import Project3 from "../assets/Zaposlenici.png";
import Project4 from "../assets/Chuck.png";

const projects = [
  {
    id: 1,
    name: "Project Pokemoni",
    description: "Retro pokemon game",
    image: Project1,
    details:
      "Pokemon 2D igrica u kojoj biraš svoj početnog pokemona i ideš u avanturu s njim. Boriš se protiv drugih pokemona i istražuješ otok.",
    technologies: ["JavaScript", "CSS", "HTML", "Tiled"],
    github: "https://github.com/Pic2500/Pokemon-v1",
  },
  {
    id: 2,
    name: "Project 2",
    description:
      "Stranica na kojoj možete upisati ime filma te dati ocijenu od 1-10 koliko vam se svidio taj film.",
    image: Project2,
    details:
      "Unutar prvog inputa piše se ime filma, drugi input je za ocjenu, mogućnost dodavanja filma za favorita, te brisanje filmova sa liste.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Pic2500/FilmRecenzija",
  },
  {
    id: 3,
    name: "Zaposlenici",
    description: "Popis Zaposlenika",
    image: Project3,
    details:
      "Mogućnost provjere zaposlenika po imenu,prezimenu,broju mobitela,maila te dodavanje,brisanje ili uređivanje zaposlenika",
    technologies: ["React", "Node.js"],
    github: "https://github.com/Pic2500/Project",
  },
  {
    id: 4,
    name: "Chuck Norris jokes search",
    description: "Chuck Norris joke search API",
    image: Project4,
    details: "Mogućnost pretreage joke-a po riječima , te resetiranje searchaW",
    technologies: ["HTML", "CSS", "JavaScript", "API"],
    github: "https://github.com/Pic2500/Project",
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
}

export default ProjectDetails;
