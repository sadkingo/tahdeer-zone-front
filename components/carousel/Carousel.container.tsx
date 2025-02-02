import { FC } from 'react';
import Carousel from "./Carousel.component";

const NUMBER_OF_IMAGES = 20;

const CarouselContainer: FC<
  {
    className?: string,
    reverseDirection?: boolean
  }
> = (props) => {
  const carouselImages = Array.from({length: NUMBER_OF_IMAGES - 1})
    .map((_, index) => {
      if (props.reverseDirection) {
        const reversedIndex = ((12 - index + NUMBER_OF_IMAGES - 1) % NUMBER_OF_IMAGES) + 1;
        return `/images/carousel/carousel-img-${reversedIndex}.jpg`;
      }
      return `/images/carousel/carousel-img-${index + 1}.jpg`
    });

  return (
    <Carousel carouselImages={carouselImages} {...props}/>
  )
}

export default CarouselContainer;