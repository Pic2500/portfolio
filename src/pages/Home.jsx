import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import robot from "../assets/mascot/robot.gif"; // Replace with your actual GIF file path
import clickSound from "../assets/sounds/click.wav"; // Ensure this path is correct

function Home() {
  const playClickSound = () => {
    const audio = new Audio(clickSound);
    audio.play();
  };

  useEffect(() => {
    document.body.style.transition = "background-color 1s ease"; // Smooth background transition
    document.body.style.backgroundColor = "#f0f8ff"; // New background color for Home page
  }, []);

  return (
    <div className="container-fluid d-flex align-items-center justify-content-center">
      <div className="row w-100">
        <div className="col-md-6 text-center text-md-start fade-in-up">
          <h1>Welcome to My Portfolio!</h1>
          <p className="lead">
            Hi! I'm Domagoj Pintar, a passionate Front-End Developer with a love
            for creating engaging and interactive web experiences. In this
            portfolio, you can explore some of my latest projects, built with
            modern technologies like HTML, CSS, JavaScript, React, and more.
          </p>
          <p className="lead">
            Feel free to explore and discover the work I've done. I believe in
            the power of clean, well-structured code to bring innovative ideas
            to life.
          </p>
          <Link
            to="/projects"
            className="btn btn-warning btn-lg mt-4"
            onClick={playClickSound} // Play sound on button click
          >
            Explore My Work
          </Link>
        </div>

        <div className="col-md-6 d-none d-md-block fade-in-up fade-in-up-delay">
          <img
            src={robot} // Replace Gengar image with the animated GIF
            alt="Mascot Animation"
            className="img-fluid"
            style={{ maxHeight: "500px", objectFit: "contain" }} // Adjust the styling as needed
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
