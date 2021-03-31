import React from "react";
import { CarouselProvider, Slider, Slide, Image } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

interface ACarouselProps {
  src1: string;
  src2: string;
  src3: string;
  src4: string;
  src5: string;
  src6: string;
  src7: string;
}

interface SmallCarouselProps {
  src1: string;
  src2: string;
  src3: string;
  src4: string;
  src5: string;
}

export const ACarousel = (props: ACarouselProps) => {
  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={100}
      totalSlides={7}
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
        <Slide index={2}>
          <Image src={props.src4} hasMasterSpinner={true} />
        </Slide>
        <Slide index={2}>
          <Image src={props.src5} hasMasterSpinner={true} />
        </Slide>
        <Slide index={2}>
          <Image src={props.src6} hasMasterSpinner={true} />
        </Slide>
        <Slide index={2}>
          <Image src={props.src7} hasMasterSpinner={true} />
        </Slide>
      </Slider>
    </CarouselProvider>
  );
};

export const SmallCarousel = (props: SmallCarouselProps) => {
  return (
    <div style={{}}>
      <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={100}
      totalSlides={5}
      infinite={true}
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
        <Slide index={3}>
          <Image style={{height: "250px"}} src={props.src4} hasMasterSpinner={true} />
        </Slide>
        <Slide index={4}>
          <Image style={{height: "250px"}} src={props.src5} hasMasterSpinner={true} />
        </Slide>
      </Slider>
    </CarouselProvider>
    </div>
  );
};
