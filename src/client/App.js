import React from 'react';
import "./app.css";
import DisplayCards from "./components/DisplayCards";
import Footer from "./components/Footer";
import CarouselPage from "./components/All";


const App = props => {
  return (
    <div className="home">
      
      <DisplayCards />
      <div className="homeCarousel">
      <CarouselPage items />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
