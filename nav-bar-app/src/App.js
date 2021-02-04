import "./App.css";
import {
  TiSocialYoutube,
  TiSocialInstagram,
  TiSocialGithub,
} from "react-icons/ti";

import { GiHamburgerMenu } from "react-icons/gi";

function App() {
  return (
    <div className="App">
      <nav>
        <div className="nav-header">
          <h1>Typical Logo</h1>
        </div>
        <div className="hamburger-container">
          <button>
            <GiHamburgerMenu />
          </button>
        </div>
        <div className="nav-links">
          <ul>
            <li href="#">Home</li>
            <li href="#">About</li>
            <li href="#">Blogs</li>
          </ul>
        </div>
        <div className="nav-social-links">
          <ul>
            <li href="#">
              <TiSocialYoutube />
            </li>
            <li href="#">
              <TiSocialInstagram />
            </li>
            <li href="#">
              <TiSocialGithub />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default App;
