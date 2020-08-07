import React, { Component } from "react";
import Carousel from "react-elastic-carousel";

import raqueta from '../../../../assets/img/Home/group-11.png'
import raquetaDos from '../../../../assets/img/Home/group-11@2x.png'
import raquetaTres from '../../../../assets/img/Home/group-11@3x.png'

import "./CarouselText.scss";

class CarouselText extends Component {
  constructor(props) {
    super(props)
    this.breakPoints = [
      { width: 1, itemsToShow: 1 },
      { width: 500, itemsToShow: 2, itemsToScroll: 2 },
      { width: 600, itemsToShow: 3, itemsToScroll: 1 },
      { width: 768, itemsToShow: 3 },
    ]
  }
  state = {
    items: [
      {
        id: 1,
        title:
          "1"
      },
      {
        id: 2,
        title: "2"
      },
      {
        id: 3,
        title:"3"
      },
      {
        id: 4,
        title:"4"
      },
    ],
  };

  render() {
    const { items } = this.state;
    return (
      <>
        <div className="carouselContainer">
          <div className="carouselContent">
            <div className="carouselTitle">
              <p>nuestras</p>
              <strong>raquetas</strong>
            </div>
            <div className="carouselSubTitle">
              <p>Conoce nuestras raquetas y aprende a jugar Tennis cómo un profesional.</p>
            </div>
            <div className="CarouselButtons">
              <div className="carouselBoton" onClick={() => this.carousel.slidePrev()}> <span>{'<'}</span> </div>
              <div className ="carouselBoton" onClick={() => this.carousel.slideNext()}> <span>{'>'}</span></div>   
            </div>
           </div>
        </div>
        <div className="carouselProducts">
          <Carousel breakPoints={this.breakPoints} showArrows={false} ref={ref => (this.carousel = ref)} className="CarouselText">
            {items.map((item) => (
              <div className={"card"} key={item.id}>
                <span>{item.title} </span>
                <img src={raqueta}
                     srcSet={raquetaDos,raquetaTres}
                     >
                </img> 
              </div>
            ))}
          </Carousel>
        </div>
      </>
    );
  }
}
export default CarouselText;
