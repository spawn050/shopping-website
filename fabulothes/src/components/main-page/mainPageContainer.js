import CarouselContainer from './carousel/carouselContainer'
import NewInContainer from './newInContainer';

const MainPageContainer = () => {
    return(
        <div className="main-page-container">
            <CarouselContainer />
            <NewInContainer gender={"MEN"}/>
        </div>
    );
};

export default MainPageContainer;