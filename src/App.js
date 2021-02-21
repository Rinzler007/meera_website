import React, { useState } from "react";
import Navbar from "./components/Navbar";
import GlobalStyle from "./globalStyles";
import { Route, HashRouter as Router, Switch } from "react-router-dom";
import PhotoGallery from "./pages/PhotoGallery";
import Home from "./pages/Home";
import Dropdown from "./components/Dropdown";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Donate from "./pages/Donate";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{margin:"0",
      padding:"0",
      minHeight:"100vh"}}>
      <Router basename="/">
        <GlobalStyle />
        <Navbar toggle={toggle} />
        <Dropdown isOpen={isOpen} toggle={toggle} />
        <Switch>
          <Route exact path="/">
            <Home toggle={toggle} />
          </Route>
          <Route exact path="/gallery" component={PhotoGallery} />
          <Route exact path="/about" component={About} />
          <Route exact path="/donate" component={Donate} />
          <Route exact path="/projects" component={Projects} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
