import "./Home.css";
import { Link } from "react-router-dom";
import Ask from "./Ask";

function Home() {
  return (
    <div className="container">
      <div>
        <img src="https://media.tenor.com/skrbv0aeoB0AAAAj/muddu.gif"></img>
      </div>
      <h1>Happy Valentine Day</h1>
      <div id="container-button">
        <div>
          <Link to="/score">
            <button>Check Your Love Score</button>
          </Link>
        </div>
        <div>
          <Link to="/ask">
            <button>Will You Be My Valentine</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
