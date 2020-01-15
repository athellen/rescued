import React from "react";
import "./app.css";
import Navbar from "./components/Navbar/Navbar";
import DisplayCards from "./components/DisplayCards";
import All from "./components/All";
import Footer from "./components/Footer";

const App = props => {
  return (
    <div className="home">
      <Navbar />
      <DisplayCards />
      {/* <All react-router={props.history} /> */}
      <Footer />
    </div>
  );
};

export default App;
