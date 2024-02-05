import { useState, useRef, useEffect } from "react"
import aboutStyles from "./About.module.css"
import pages from "./data"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlickSlider from "react-slick";

function About({ state }) {
  const aboutRef = useRef(null)
  const [index, setIndex] = useState(0)
  const sliderRef = useRef(null)
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    // cssEase: "linear",
    pauseOnHover: true,
  };
  const moveLeft = () => {
    sliderRef.current.slickPrev()
  }
  const moveRight = () => {
    sliderRef.current.slickNext()
  }
  return (
    <div className={aboutStyles.aboutContainer} id="about" ref={aboutRef}>
      <a className={aboutStyles.link + " toDownLInk"} href="#contact" onClick={() => { state[1](4) }}></a>
      <div className="arrows">
        <div className="arrow" onClick={moveLeft}></div>
        <div className="arrow arrow2" onClick={moveRight}></div>
      </div>
      <SlickSlider {...settings} ref={sliderRef}>
        {pages.map((page, i) => {
          return (
            <div className={aboutStyles.about} key={i}>
              <div className={aboutStyles.aboutText}>
                <h1 className="title">{page.title}</h1>
                <p>
                  {page.text}
                </p>
                <br />
                <p>
                  {page.text2}
                </p>
              </div>
              <div className={aboutStyles.aboutImageContainer}>
                <img className={aboutStyles.companyAbout} src={page.image} height="100%" width="100%" />
              </div>
            </div>
          )
        })}
      </SlickSlider>
    </div>
  )
}
export default About