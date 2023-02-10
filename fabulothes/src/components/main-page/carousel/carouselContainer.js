import CarouselImageContainer from "./carouselImageContainer";
import CarouselTitleContainer from "./carouselTitleContainer";

const CarouselContainer = () => {
    return(
        <div className="carousel-container">
            <CarouselImageContainer />
            <CarouselTitleContainer />
        </div>
    );
};

export default CarouselContainer;