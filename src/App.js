import React from 'react';

import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Technologies from "./pages/Technologies";

import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
    <Router>
    <div>
      <Navbar />
      <Wrapper>
        <Route exact path="/" component={Home} />
        <Route exact path="/Portfolio" component={Portfolio} />
        <Route exact path="/Resume" component={Resume} />
        <Route exact path="/Technologies" component={Technologies} />
        </Wrapper>
      <Footer />
    </div>
  </Router>

  );
}

export default App;
