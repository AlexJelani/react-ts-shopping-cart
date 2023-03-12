import { Link } from "react-router-dom";
import "../style/home.scss";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export function About() {
  return (
    <>
      <div id="home-two">
        <p id="shopBtn">
          <a
            href="https://github.com/AlexJelani"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub style={{ marginRight: "10px" }} />
          </a>
          <a
            href="https://linkedin.com/in/jelani-alexander"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
        </p>
      </div>
    </>
  );
}
