import React from "react";
import Card from "./Card";

const All = [
  { name: "Fire", page: "/fire", text: "Fire Department" },
  {
    name: "Meteorological",
    page: "/meteorogical",
    text: "Meteorological Department"
  },
  { name: "Security", page: "/security", text: "Security Department" },
  { name: "Red Cross", page: "/redcross", text: "Red Cross Department" },
  { name: "Medical", page: "/medical", text: "Medical Department" }
];

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dpt: All
    };
  }

  render() {
    return (
      <p>something</p>
      // <div className="cards_collection">
      //   {this.state.dpt.map(({ name, page, text }) => (
      //     <div
      //       //onClick={() => this.props.history.push(`${page}`, text)}
      //       key={name}
      //       className="card"
      //     >
      //       {/* <Card item={name} /> */}
      //     </div>
      //   ))}
      // </div>
    );
  }
}

export default Home;
