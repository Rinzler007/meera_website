import React, { useState } from "react";
import Navbar from "./components/Navbar";
import GlobalStyle from "./globalStyles";
import Footer from "./components/Footer";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import PhotoGallery from "./pages/PhotoGallery";
import Home from "./pages/Home";
import Dropdown from "./components/Dropdown";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{margin:"0",
      padding:"0",
      minHeight:"100vh"}}>
      <Router>
        <GlobalStyle />
        <Navbar toggle={toggle} />
        <Dropdown isOpen={isOpen} toggle={toggle} />
        <Switch>
          <Route exact path="/">
            <Home toggle={toggle} />
          </Route>
          <Route exact path="/gallery" component={PhotoGallery} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
