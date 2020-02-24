import React from "react";
import floods from "../../../images/floods.jpg";

import "./department.css";

const Meteorological = () => {
  return (
    <div
      className="department-container"
      style={{
        background: `url(${floods})`,
        backgroundSize: "cover",
        color: "white"
      }}
    >
      <header>
        <h1 className="fire">This is Meteorological Department</h1>
      </header>
      <main>
        <section>
          <h2>*111*4#</h2>
          <div className="department-content">
            <h3>Areas most likely to experience drought next month</h3>

            <ul>
            <li>Mbeme</li>
              <li>Ahero</li>
              <li>Elgon</li>
              <li>Moyale</li>
              <li>Murang'a</li>
              <li>Wote</li>
            </ul>
          </div>
        </section>
      </main>
      <div className="meteor" fontFamily="'Lilita One', cursive">
      <footer>
        <h3>Incase of emergency, text 'HELP' and your location to *111*2#</h3>
      </footer>
      </div>
    </div>
  );
};

export default Meteorological;
