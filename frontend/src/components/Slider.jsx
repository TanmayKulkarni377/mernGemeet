import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();
import slide1 from "../assets/slider/Gems-Bracelet-banner.jpeg";
import slide2 from "../assets/slider/gems-sphere-banner.jpeg";
import slide3 from "../assets/slider/gems-tumbels-and-tower-banner.jpeg";
import slide4 from "../assets/slider/Angel-banner.jpeg";
import { LinkContainer } from "react-router-bootstrap";

const Slider = () => {
  return (
    <div>
      <swiper-container
        navigation="true"
        pagination="true"
        slides-per-view="1"
        speed="500"
        loop="true"
      >
        <swiper-slide>
          <div className="position-relative">
            <img src={slide1} alt="banner" width="100%" />
            <div className="banner-details">
              <span className="text-white fs-1 ">Bracelets</span>
                <p className='text-white'>Check Out Now</p>
                <LinkContainer to='/shop'>
                <button className="bg-white text-black btn shadow">Shop Now</button>
                </LinkContainer>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div className="position-relative">
          <img src={slide2} alt="banner" width="100%" />
            <div className="banner-details">
              <span className=" fs-1 ">Shpere</span>
                <p className=''>Check Out Now</p>
                <LinkContainer to='/shop'>
                <button className="bg-black text-white  btn shadow">Shop Now</button>

                </LinkContainer>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div className="position-relative">
          <img src={slide3} alt="banner" width="100%" />
            <div className="banner-details">
              <span className=" fs-1 ">Tower</span>
                <p className=''>Check Out Now</p>
                <LinkContainer to='/shop'>
                <button className="bg-black text-white btn shadow">Shop Now</button>
                </LinkContainer>
            </div>
          </div>
        </swiper-slide>
      </swiper-container>
    </div>
  );
};

export default Slider;
