import React from "react";
import { useParams, Link } from "react-router-dom";

import Project1 from "../assets/Pokemon.png";
import Project2 from "../assets/Film.png";
import Project3 from "../assets/Zaposlenici.png";
import Project4 from "../assets/Chuck.png";
import Project5 from "../assets/Chuck.png";

const projects = [
  {
    id: 1,
    name: "Project Pokemon",
    description: "Retro Pokémon game",
    image: Project1,
    liveDemo: "https://pokemon-v1-six.vercel.app/",

    details: [
      { type: "title", content: "Details:" },
      {
        type: "paragraph",
        content:
          "This was my first project as a frontend developer, and it's still in progress. The game is a 2D Pokémon adventure where you choose your starter Pokémon and go on an adventure battling other Pokémon and exploring an island.",
      },
      { type: "title", content: "Skills Learned:" },
      {
        type: "list",
        content: [
          "Handling player movements and interactions in a game",
          "Transitioning between scenes and managing game state",
          "Using localStorage to persist data between sessions",
          "Debugging and problem-solving in JavaScript",
        ],
      },
      { type: "title", content: "Challenges and Problem Solving:" },
      {
        type: "paragraph",
        content:
          "The most challenging part was managing the game loop, ensuring actions like player movement and battles were smooth without causing lag.",
      },
      { type: "title", content: "Future Improvements:" },
      {
        type: "paragraph",
        content:
          "I plan to add more Pokémon, refine the battle mechanics, and integrate animations for better user experience.",
      },
    ],
    technologies: ["JavaScript", "CSS", "HTML", "Tiled"],
    github: "https://github.com/Pic2500/Pokemon-v1",
  },
  {
    id: 2,
    name: "Movie Review App",
    description:
      "Movie review web app where users can rate and manage their favorite films.",
    image: Project2,
    liveDemo: "https://film-recenzija.vercel.app/",
    details: [
      { type: "title", content: "Details:" },
      {
        type: "paragraph",
        content:
          "This project was a great exercise in working with user input, DOM manipulation, and local storage. The idea behind the app is simple: the user can enter a movie name and rate it on a scale of 1–10.",
      },
      { type: "title", content: "Key Features:" },
      {
        type: "list",
        content: [
          "Users can input a movie name and assign it a rating from 1 to 10.",
          "Favorite movies are marked and displayed distinctly.",
          "Users can delete movies from the list with a single click.",
          "All movie data is stored in the browser using localStorage.",
        ],
      },
      { type: "title", content: "What I Learned:" },
      {
        type: "list",
        content: [
          "Handling and validating form inputs using JavaScript.",
          "Dynamically creating and updating DOM elements based on user interaction.",
          "Working with localStorage to persist data.",
          "Writing cleaner and reusable functions for updating UI and managing data.",
        ],
      },
      { type: "title", content: "Future Plans:" },
      {
        type: "paragraph",
        content:
          "Add a filter and search feature to easily find movies. Add sorting by rating or name. Transition the project to React for better state management and scalability.",
      },
    ],
    technologies: ["HTML", "CSS", "JavaScript", "localStorage"],
    github: "https://github.com/Pic2500/FilmRecenzija",
  },
  {
    id: 3,
    name: "Employee Management System",
    description: "Simple HR system for managing employee data.",
    image: Project3,
    liveDemo: "https://project-rosy-chi.vercel.app/",
    details: [
      { type: "title", content: "Details:" },
      {
        type: "paragraph",
        content:
          "This project simulates an internal HR tool where users can manage a list of employees. It was created as part of my final course project and is one of the most complete apps I've built so far using React.",
      },
      { type: "title", content: "Key Features:" },
      {
        type: "list",
        content: [
          "View all employees with details like name, age, position, shift, phone number, email, and years of experience.",
          "Add new employees via a form.",
          "Edit existing employee data with real-time updates.",
          "Delete employees from the list.",
          "Search employees by name, phone number, or email.",
        ],
      },
      { type: "title", content: "What I Learned:" },
      {
        type: "list",
        content: [
          "Building dynamic user interfaces with React.",
          "Using state and props to manage and pass data across components.",
          "Implementing CRUD operations (Create, Read, Update, Delete).",
          "Managing component logic and working with controlled inputs.",
          "Utilizing localStorage to persist data even after refreshing the browser.",
        ],
      },
      { type: "title", content: "Future Plans:" },
      {
        type: "paragraph",
        content:
          "Add filters and sorting by shift, position, or experience. Implement form validation and better UX feedback.",
      },
    ],
    technologies: ["React", "JavaScript", "CSS", "Bootstrap", "localStorage"],
    github: "https://github.com/Pic2500/Project",
  },
  {
    id: 4,
    name: "Chuck Norris Joke Search",
    description: "Search for random Chuck Norris jokes using an external API.",
    image: Project4,
    liveDemo: "",
    details: [
      { type: "title", content: "Details:" },
      {
        type: "paragraph",
        content:
          "This fun little app connects to the Chuck Norris joke API and allows users to search for jokes based on any keyword they type in.",
      },
      { type: "title", content: "Key Features:" },
      {
        type: "list",
        content: [
          "Search jokes by any keyword.",
          "View multiple joke results fetched from the API.",
          "Reset the search to start over.",
          "Responsive and minimal design for quick use.",
        ],
      },
      { type: "title", content: "What I Learned:" },
      {
        type: "list",
        content: [
          "How to work with APIs and fetch data asynchronously using fetch().",
          "Parsing JSON responses and dynamically rendering content.",
          "Handling user input and updating the UI based on search terms.",
          "Implementing basic UI/UX logic (loading, resetting, empty results).",
          "Building a simple but clean layout using CSS and Bootstrap.",
        ],
      },
    ],
    technologies: ["HTML", "CSS", "JavaScript", "API", "Bootstrap"],
    github: "https://github.com/Pic2500/Project",
  },
  {
    id: 5,
    name: "TO-DO-LIST",
    description: "Your own to do list",
    image: Project5,
    liveDemo: "",
    details: [
      { type: "title", content: "Details:" },
      {
        type: "paragraph",
        content:
          "To do list where you can put in what you need to do and check it if you done it or delete it.",
      },
      { type: "title", content: "Key Features:" },
      {
        type: "list",
        content: [
          "Search jokes by any keyword.",
          "View multiple joke results fetched from the API.",
          "Reset the search to start over.",
          "Responsive and minimal design for quick use.",
        ],
      },
      { type: "title", content: "What I Learned:" },
      {
        type: "list",
        content: [
          "How to work with APIs and fetch data asynchronously using fetch().",
          "Parsing JSON responses and dynamically rendering content.",
          "Handling user input and updating the UI based on search terms.",
          "Implementing basic UI/UX logic (loading, resetting, empty results).",
          "Building a simple but clean layout using CSS and Bootstrap.",
        ],
      },
    ],
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Pic2500/Project",
  },
];

function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="project-not-found text-center">
        <h2 className="not-found-title">Project Not Found</h2>
        <p>Sorry, we couldn't find the project you're looking for.</p>
        <Link to="/projects" className="btn btn-secondary mt-4">
          Back to Projects
        </Link>
      </div>
    );
  }

  const renderDetails = (details) => {
    return details.map((item, index) => {
      if (item.type === "title") {
        return (
          <h4 key={index} className="detail-title">
            {item.content}
          </h4>
        );
      }

      if (item.type === "list") {
        return (
          <ul key={index} className="detail-list">
            {item.content.map((listItem, idx) => (
              <li key={idx}>{listItem}</li>
            ))}
          </ul>
        );
      }

      return (
        <p key={index} className="detail-paragraph">
          {item.content}
        </p>
      );
    });
  };

  return (
    <div className="project-details-container">
      <h2 className="project-title">{project.name}</h2>

      <div className="project-content">
        <div className="project-left">
          <img
            src={project.image || "/path/to/default-image.png"}
            className="project-image"
            alt={project.name}
          />
        </div>

        <div className="project-info">
          {renderDetails(project.details)}

          <div className="button-links">
            {project.github && (
              <a
                href={project.github}
                className="btn btn-dark"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            )}

            {project.liveDemo && (
              <a
                href={project.liveDemo}
                className="btn-live-demo"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>

      <Link to="/projects" className="btn btn-secondary back-link">
        Back to Projects
      </Link>
    </div>
  );
}

export default ProjectDetails;
