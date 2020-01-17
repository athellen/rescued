import React, { useState } from 'react';
import "./app.css";
import Navbar from "./components/Navbar/Navbar";
import DisplayCards from "./components/DisplayCards";
import All from "./components/All";
import Footer from "./components/Footer";
import { UncontrolledCarousel } from 'reactstrap';
import land from "../images/land.jpg"
const items = [
  {
    src: 'https://www.comoxvalleyrecord.com/wp-content/uploads/2019/12/19907131_web1_gr-climate-roads-1_ne2019121175219239.jpeg',
    altText: 'Slide 1',
    caption: 'Slide 1',
    header: 'Slide 1 Header',
    key: '1'
  },
  {
    src: '',
    altText: 'Slide 2',
    caption: 'Slide 2',
    header: 'Slide 2 Header',
    key: '2'
  },
  {
    src: 'https://cdn.pixabay.com/photo/2017/02/07/14/05/humanity-2045992_960_720.jpg',
    altText: 'Slide 3',
    caption: 'Slide 3',
    header: 'Slide 3 Header',
    key: '3'
  }
];

const App = props => {
  return (
    <div className="home">
     
      <Navbar />
      
      <DisplayCards />
      <div className="homeCarousel">
      <UncontrolledCarousel style={{ height: '40vh' }}items={items} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
