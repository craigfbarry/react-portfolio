import React from "react";

function Home() {
  return (
    <div>      
        <div className="container" id="content">
          <div id="hero-div1">
              <img src="https://cdn.pixabay.com/photo/2020/04/08/16/32/keyboard-5017973_960_720.jpg" className="img-fluid w-100" alt="laptop"/>
              <h3 id="hero-text1">Intuitive design</h3>
              <img src="assets/hero2.jpg" className="img-fluid w-100" alt="mobile"/>
              <h3 id="hero-text2">Responsive websites</h3>
              <img src="https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" className="img-fluid w-100" alt="computer"/>
              <h3 id="hero-text3">Full stack solutions</h3>
          </div>
          <div className="row pb-sm-5 p-3 mt-3">
              <div class="col-sm-8" id="about">
                <h4 className="text-center">About me</h4>
                <p className="text-center p-2 pb-sm-5">
                  I initially studied electronic engineering and worked as a technician before backpacking around Europe.
                  Over the past 10 years I have provided IT support in the Energy industry, Banking and Finance, the Mining industry and for the Government.
                  I am currently studying Web Development and look forward to furthering my career.
                </p>
              </div>
              <div className="text-center col-sm-4 p-2 pb-5 mb-5 mt-sm-3">
                <img src="assets/me.png" alt="Craig" class="rounded-circle w-50 w-sm-80"/>
              </div>
          </div> 
        </div>      
    </div>
  );
}

export default Home;