import "./Waiting.scss"
import { FaGithub } from "react-icons/fa";

function Waiting() {
  return (
    <div className="container">
      <h1 className="title">🚧 Le site est en cours de construction 🚧</h1>
      <p className="text">
        Vous pouvez suivre son avancée sur mon{" "}
        <a className="link" href="https://github.com/ugtheven/new-portfolio">
          <FaGithub />
        </a>
      </p>
    </div>
  );
}

export default Waiting;
