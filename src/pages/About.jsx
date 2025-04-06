import React from "react";

function About() {
  return (
    <div className="container fade-in">
      {" "}
      {/* Apply fade-in here */}
      <h1 className="text-center mb-4">About Me</h1>
      <div className="about-content">
        <p>
          Hi, I'm <strong>Domagoj Pintar</strong>, born on{" "}
          <strong>28th March 1998</strong> in <strong>Sisak</strong>. I
          graduated from <strong>Tehnička škola Sisak</strong> as a{" "}
          <strong>Technician for Electronics</strong>.
        </p>
        <p>
          Currently, I work as an <strong>Electrician/Metalworker</strong>, but
          my passion for technology led me to explore the world of web
          development. I recently completed a{" "}
          <strong>Front-End Developer</strong> course at{" "}
          <strong>Algebra</strong>, where I gained expertise in modern front-end
          technologies.
        </p>
        <p>
          My skills include:
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Git</li>
            <li>Bootstrap Library</li>
          </ul>
        </p>
        <p>
          I am continuously learning and improving my skills to build
          interactive, user-friendly websites and applications. I look forward
          to expanding my knowledge and contributing to exciting projects in the
          future.
        </p>
      </div>
    </div>
  );
}

export default About;
