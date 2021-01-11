import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup, Image } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import "./css/Carousel.css"
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function Carousel() {
    return (
        <div className="carousel">
            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={20}
                totalSlides={3}
                isPlaying={true}
                lockOnWindowScroll={true}
                infinite={true}
            >
                <Slider>
                    <Slide index={0}><Image src="https://m.media-amazon.com/images/G/01/digital/video/sonata/Hero_IN_Inspectorchingum/74ed085d-50d0-40e3-9b83-ba6da629610f._UR3000,600_SX1500_FMwebp_.jpg" alt="Movie 1" /></Slide>
                    <Slide index={1}><Image src="https://m.media-amazon.com/images/G/01/digital/video/sonata/Hero_IN_Powerpuff/04cc4539-ab8e-4f1e-899f-548f8db739fe._UR3000,600_SX1500_FMwebp_.jpg" alt="Movie 2" /></Slide>
                    <Slide index={2}><Image src="https://m.media-amazon.com/images/G/01/digital/video/sonata/gl2_wishenpoof_s2c/4dfc3cc3-16c4-4279-9ca7-4df51c5bf040._UR3000,600_SX1500_FMwebp_.jpg" alt="Movie 2" /></Slide>
                </Slider>
                <ButtonBack className="carousel__back position-absolute border-0 text-white"><ArrowBackIosIcon /></ButtonBack>
                <ButtonNext className="carousel__next position-absolute border-0 text-white"><ArrowForwardIosIcon /></ButtonNext>
                <DotGroup className="carousel__dots m-auto" showAsSelectedForCurrentSlideOnly={true} />
            </CarouselProvider>
        </div>
    )
}

export default Carousel
