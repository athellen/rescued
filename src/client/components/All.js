import React from "react";
import {
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask,
  MDBContainer
} from "mdbreact";
import arid from "../../images/arid.jpg";
import alarm from "../../images/alarm.jpg"; 
const CarouselPage = () => {
  return (
    <div>
      <MDBCarousel
        activeItem={1}
        length={3}
        showControls={true}
        showIndicators={true} 
        className="z-depth-1"
      >
        
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img className="d-block w-100" src={alarm} alt="First slide" />
              <MDBMask overlay="black-light" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive">Disasters are not, cannot and will never be part of life</h3>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-100"
                src={arid}
                alt=""
              />
              <MDBMask overlay="black-strong" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive">While natural disasters capture headlines and national attention short-term, the work of recovery and rebuilding is long-term</h3>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block w-100"
                src= "https://lh3.googleusercontent.com/Ybh3jsKQDNZ3oTGlt7nMwyY-Wru-GvEAsJShjVJQYh42-r8c_S-ZNe-FHhgpAOwxyaHTlXieCgUIJki64DHQmui3-4QaBg=s1200"
                alt="Third slide"
              />
              <MDBMask overlay="black-slight" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive">In helping one another we grow</h3>
            </MDBCarouselCaption>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </div>
  );
};

export default CarouselPage;
