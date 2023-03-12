import { Link } from "react-router-dom";
import '../style/home.scss'
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'

export function About() {
  return (
    <>
       <div id="home-two">
        <Link to={"/store"}>
          <p id="shopBtn"><FaGithub/><FaLinkedinIn/></p>
        </Link>
      </div>
    </>
  );
}
