import { useRef, useState } from "react"
import pages from "./data"
import sliderStyles from "./Slider.module.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlickSlider from "react-slick";

function Slider() {
    const [index, setIndex] = useState(0)
    const sliderRef = useRef(null)
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 3000,
        pauseOnHover: false,
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
            {/* <div className={sliderStyles.pager}>
                {pages.map((pageItem, i) => {
                    return <div key={i} style={{ opacity: i === index ? 0.8 : 0.5 }}></div>
                })}
            </div> */}
        </div>
    )
}

export default Slider