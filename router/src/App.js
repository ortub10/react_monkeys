import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./comps/about";
import Gallery from "./comps/gallery";
import Home from "./comps/home";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <Link to="/">Home</Link> | <Link to="/about">About</Link> |
          <Link to="gallery">Gallery</Link>
        </header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/gallery" component={Gallery} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
