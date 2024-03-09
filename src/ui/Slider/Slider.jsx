import { useRef } from "react"
import pages from "./data"
import sliderStyles from "./Slider.module.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlickSlider from "react-slick";

function Slider() {
    const sliderRef = useRef(null)
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 5000,
        pauseOnHover: false,
        responsive: [
            {
                breakPoints: 600,
                settings: {
                    speed: 500,
                }
            }
        ]
    };
    const moveLeft = () => {
        sliderRef.current.slickPrev()
    }
    const moveRight = () => {
        sliderRef.current.slickNext()
    }
    return (
        <div className={sliderStyles.sliderContainer} id="home">
            <div className="arrows">
                <div className="arrow" onClick={moveLeft}></div>
                <div className="arrow arrow2" onClick={moveRight}></div>
            </div>
            <SlickSlider {...settings} className={sliderStyles.slider} ref={sliderRef}>
                {pages.map((page, i) => {
                    return (
                        <div className={sliderStyles.sliderDiv} key={i}>
                            <div className={sliderStyles.sliderImage} style={{ backgroundImage: `url(${page.image})` }}></div>
                            <div className={sliderStyles.sliderContent}>
                                <h1 className={sliderStyles.title}>{page.title}</h1>
                                <p className={sliderStyles.description}>{page.description}</p>
                            </div>
                        </div>)
                })}
            </SlickSlider>
        </div>
    )
}

export default Slider