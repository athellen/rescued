import React, { Component } from "react";
import red from "../../../images/red.jpg";
import "./department.css";

class Department extends Component {
  render() {
    return (
      <div
        className="department-container"
        style={{
          backgroundImage: "url(https://lh3.googleusercontent.com/4__lruxHoVYjOXuTYmdFOQg_EQfmg_RcW9suy1cbgBfalTZ1nnqwJ_GdFjUMHn9griI)",
          backgroundSize: "cover",
          color: "black"
        }}
      >
        <header>
          <h1>This is Red Cross Department</h1>
        </header>
        <main>
          <section>
            <h2>*111*4#</h2>
            <div className="department-content">
              <h3>What to do incase of fire</h3>

              <p> The Red Cross, our last hope, had left us to starve </p>
              <p>
                {" "}
                Whether it is a call to action for blood drives, disaster relief
                or community outreach, the Kenyan Red Cross does an
                extraordinary job at not only meeting the needs of a community
                but also for the preparation and planning for long-term support
              </p>
            </div>
          </section>
        </main>
        <footer>
          <h3>Incase of fire, text 'FIRE' and your location to *111*1#</h3>
        </footer>
      </div>
    );
  }
}

export default Department;
