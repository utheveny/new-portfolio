import "./Home.scss";
import logo from "../../assets/logo.png";
import waveMobile from "../../assets/wave-mobile.png";
import waveDesktop from "../../assets/wave-desktop.png";
import arrowDown from "../../assets/arrow-down.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

function Home() {
  return (
    <div className="container">
      <div className="landing">
        <img src={logo} alt="Logo" className="logo" />
        <h1 className="title">@ugtheven</h1>
        <h2 className="subtitle">Developpeur Front-End React Junior</h2>

        <div className="socials">
          <a href="https://www.linkedin.com/in/ugo-theveny/" className="social-link">
            <FaLinkedin className="social-icon" />
          </a>
          <a href="https://github.com/ugtheven" className="social-link">
            <FaGithubSquare className="social-icon" />
          </a>
        </div>

        <img src={arrowDown} alt="arrow down" className="more" />
      </div>

      <img src={waveMobile} alt="wave" className="wave-mobile" />
      <img src={waveDesktop} alt="wave" className="wave-desktop" />
    </div>
  );
}

export default Home;
