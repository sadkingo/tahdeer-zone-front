import { FC } from 'react';
import Carousel from "./Carousel.component";

const carouselImages = Array.from({length: 19})
  .map((_, index) => `/images/carousel/carousel-img-${index + 1}.jpg`);

const CarouselContainer: FC<
  {
    className?: string,
    reverseDirection?: boolean
  }
> = (props) => {
  return (
    <Carousel carouselImages={carouselImages} {...props}/>
  )
}

export default CarouselContainer;