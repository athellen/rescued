import React, { Component } from "react";
import med from "../../../images/med.jpg";
import "./department.css";

class Department extends Component {
  render() {
    return (
      <div
        className="department-container"
        style={{
          background: `url(${med})`,
          backgroundSize: "cover",
          height: "100vh",
          color: "black"
        }}
      >
        <header>
          <h1>This is Medical Department</h1>
        </header>
        <main>
          <section>
            <h2>*111*5#</h2>
            <div className="department-content">
              <h3>Warning signs of a medical emergency</h3>

              <ul>
                <li> Bleeding that does not stop</li>
                <li> Breathing problems(difficulty in brathing, shortness of breath)</li>
                <li> Change in mental status(such as unusual behaviour, confusion, difficulty arousing)</li>
                <li> Chest pain</li>
                <li> Choking</li>
                <li> Coughing up or vomiting blood</li>
                <li> Fainting or loss of consciousness</li>
                <li> Feeling of committing suicide or murder</li>
              </ul>
            </div>
          </section>
        </main>
        <div className="foot">
        <footer>
          <h3>Incase of emergency, text 'EMERGENCY' and your location to *111*5#</h3>
        </footer>
        </div>
      </div>
    );
  }
}

export default Department;
