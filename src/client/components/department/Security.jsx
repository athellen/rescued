import React, { Component } from "react";
import police from "../../../images/police.png";
import "./department.css";

class Department extends Component {
  render() {
    return (
      <div
        className="department-container"
        style={{
          background: `url(${police})`,
          backgroundSize: "cover",
          color: "black"
        }}
      >
        <header>
          <h1 className="fire">This is Security Department</h1>
        </header>
        <main>
          <section>
            <h2>*111*3#</h2>
            <div className="department-content">
              <h3>Criminal complaints – useful information</h3>

              <ul>
                <li>If you do not have the legal capacity to file a report, your legal representative can do it for you.</li>
                <li>Ideally you should file the report as soon as possible, whether you know who the perpetrator was or not</li>
                <li>You can only file a criminal complaint if you are the actual victim of a crime.</li>
                <li>You must file the complaint within three months of the incident.</li>
                <li>You can make the complaint against a specific person or persons or against persons unknown.</li>
                <li>You can withdraw the complaint. But remember: if you have been injured or sustained a loss or damage due to the crime, and you want to claim for this as part of the criminal proceedings</li>
                <li>You don't have to have a lawyer. But in complicated cases, it is advisable to consult one.</li>
                <li>You can file a criminal complaint at any police station, either verbally or in writing or you can file a written complaint with the public prosecutor.</li>
              </ul>
            </div>
          </section>
        </main>
        <footer>
          <h3>Incase of a crime, text 'CRIME' and your location to *111*3#</h3>
        </footer>
      </div>
    );
  }
}

export default Department;
