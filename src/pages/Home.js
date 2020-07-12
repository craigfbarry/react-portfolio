import React from "react";

function Home() {
  return (
    <div>
      <h1>stuff is hidden</h1>
      <h1>Where is the stuff</h1>
        <div className="container" id="content">
          <div id="hero-div1">
          <img src="https://cdn.pixabay.com/photo/2020/04/08/16/32/keyboard-5017973_960_720.jpg" className="img-fluid w-100" alt="laptop"/>
          <h3 id="hero-text1">Intuitive design</h3>
          <img src="assets/hero2.jpg" className="img-fluid w-100" alt="mobile"/>
          <h3 id="hero-text2">Responsive websites</h3>
          <img src="https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" className="img-fluid w-100" alt="computer"/>
          <h3 id="hero-text3">Full stack solutions</h3>
          </div>
      </div>
    </div>
  );
}

export default Home;