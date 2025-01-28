import { FC } from 'react';
import Carousel from "./Carousel.component";

const CarouselContainer: FC<{ className?: string, reverseDirection?: boolean }> = (props) => {
  return (
    <Carousel {...props}/>
  )
}

export default CarouselContainer;