import React, { Component } from "react";
import "./department.css";

class Department extends Component {
  render() {
    return (
      <div
        className="department-container"
        style={{
          background:
            "url(https://i1.wp.com/fire-extinguisher-servicing.com/wp-content/uploads/2019/12/Fire3-1.jpg?fit=1200%2C751&ssl=1)",
          height: "100vh",
          color: "white"
        }}
      >
        <header className="head">
          <h1>This is Fire Department</h1>
        </header>
        <main>
          <section>
            <h2>*111*1#</h2>
            <div className="department-content">
              <h3 className="fire">
                What to do incase of fire
              </h3>

              <ul>
                <li>Get the fire extinguisher</li>
                <li>Raise an Alarm</li>
                <li>Call 111</li>
                <li>Find the best possible exit route</li>
                <li>If your clothes catch fire, stop drop and roll</li>
              </ul>
            </div>
          </section>
          <div className="video">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/lUojO1HvC8c"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </main>
        <div className="foot">
          <footer>
            <h3>Incase of fire, text 'FIRE' and your location to *111*1#</h3>
          </footer>
        </div>
      </div>
    );
  }
}

export default Department;
