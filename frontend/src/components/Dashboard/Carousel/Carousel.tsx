import React from "react";
import ImageGallery from 'react-image-gallery';

import carusselelem1 from "../../LandingPage/LandingPageImages/carussel1.jpeg";
import carusselelem2 from "../../LandingPage/LandingPageImages/carussel2.jpeg";
import carusselelem3 from "../../LandingPage/LandingPageImages/carussel3.jpeg";

export default class MyCarousel extends React.Component {
  public render() {
    const images = [
      {
        original: 'https://picsum.photos/id/1018/1000/600/',
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
      },
      {
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/250/150/',
      },
      {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
      },
    ];
    return <ImageGallery items={images} />;
  }
}
