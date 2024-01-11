import { useRef } from "react"
import WindowCard from "../WindowCard/WindowCard"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlickSlider from "react-slick";

function Windows({ selected, setSelected, windowCards, styles }) {
    const sliderRef = useRef(null)
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 4000,
        // cssEase: "linear",
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };
    const moveLeft = (e) => {
        e.preventDefault()
        sliderRef.current.slickPrev()
    }
    const moveRight = (e) => {
        e.preventDefault()
        sliderRef.current.slickNext()
    }
    return (
        <div className={styles.windows}>
            <div className={styles.absoluteBackground}></div>
            {/* <div className="arrows">
                <div className="arrow" onClick={moveLeft}></div>
                <div className="arrow arrow2" onClick={moveRight}></div>
            </div> */}
            <div>
            <SlickSlider {...settings} ref={sliderRef} className={styles.slider}>
                {
                    windowCards.map((item, index) => {
                        return (
                            <WindowCard
                                type={item.type}
                                key={index}
                                image={item.image}
                                title={item.title}
                                properties={item.properties}
                                isSelected={index === selected ? true : false}
                                index={index}
                                setSelected={setSelected} />
                        )
                    })
                }
            </SlickSlider>
            </div>
        </div>
    )
}
export default Windows