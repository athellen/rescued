import React from "react";
import Card from "./Card";
import { PromiseProvider } from "mongoose";
import { withRouter, Link } from "react-router-dom";

const CardItems = [
  { name: "Fire", page: "/fire" },
  { name: "Meteorological", page: "/meteorogical" },
  { name: "Security", page: "/security" },
  { name: "Red Cross", page: "/redcross" },
  { name: "Medical", page: "/medical" }
];

const DisplayCards = props => {
  console.log(props);
  return (
    <div className="cards">
      {CardItems.map(({ name, page }, index) => (
        <Link key={index} to={page}>
          <div
            // onClick={e => props.history.push(`${page}`)}
            className="card_item"
            key={name}
          >
            <Card item={name} />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default withRouter(DisplayCards);
