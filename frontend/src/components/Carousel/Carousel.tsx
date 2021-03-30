import React from "react";
import { CarouselProvider, Slider, Slide, Image } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

interface ACarouselProps {
  src1: string;
  src2: string;
  src3: string;
}

export const ACarousel = (props: ACarouselProps) => {
  return (
    <CarouselProvider
      naturalSlideWidth={150}
      naturalSlideHeight={100}
      totalSlides={3}
      infinite={true}
    >
      <Slider>
        <Slide index={0}>
          <Image src={props.src1} hasMasterSpinner={true} />
        </Slide>
        <Slide index={1}>
          <Image src={props.src2} hasMasterSpinner={true} />
        </Slide>
        <Slide index={2}>
          <Image src={props.src3} hasMasterSpinner={true} />
        </Slide>
      </Slider>
    </CarouselProvider>
  );
};

export const SmallCarousel = (props: ACarouselProps) => {
  return (
    <div style={{height: "250px"}}>
      <CarouselProvider
      naturalSlideWidth={0}
      naturalSlideHeight={0}
      totalSlides={3}
      infinite={true}
      isIntrinsicHeight={true}
    >
      <Slider>
        <Slide index={0}>
          <Image style={{height: "250px"}} src={props.src1} hasMasterSpinner={true} />
        </Slide>
        <Slide index={1}>
          <Image style={{height: "250px"}} src={props.src2} hasMasterSpinner={true} />
        </Slide>
        <Slide index={2}>
          <Image style={{height: "250px"}} src={props.src3} hasMasterSpinner={true} />
        </Slide>
      </Slider>
    </CarouselProvider>
    </div>
  );
};
