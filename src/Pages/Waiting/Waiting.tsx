import "./Waiting.scss"
import { FaGithubSquare } from "react-icons/fa";

function Waiting() {
  return (
    <div className="container">
      <h1 className="title">🚧 Cette page est en cours de développement 🚧</h1>
      <p className="text">
        Vous pouvez suivre l'avancée du développement sur mon{" "}
        <a className="link" href="https://github.com/ugtheven/new-portfolio">
          <FaGithubSquare />
        </a>
      </p>
    </div>
  );
}

export default Waiting;
