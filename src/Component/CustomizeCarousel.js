import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
function CustomizeCarousel(){
 return (<>
        <Carousel
        autoPlay={true}
        infiniteLoop={true} 
        interval={2000}
        showThumbs={false}
        showStatus={false}>
            <div>
                <img src="https://preview.colorlib.com/theme/makeupartist/img/hero/hero-1.jpg.webp" alt="image1" />
            </div>
            <div>
                <img src="https://preview.colorlib.com/theme/makeupartist/img/hero/hero-1.jpg.webp" alt="image2" />
            </div>
            <div>
                <img src="https://preview.colorlib.com/theme/makeupartist/img/hero/hero-1.jpg.webp" alt="image3" />
            </div>
        </Carousel>
 </>)
}
export default CustomizeCarousel;