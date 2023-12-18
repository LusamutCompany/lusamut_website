import { useEffect, useRef, useState } from "react"
import sliderStyles from "./Slider.module.css"
import sliderImage from "../../assets/jpgs/sliderImage.jpg"
import sliderImage2 from "../../assets/jpgs/sliderImage2.jpg"
import sliderImage3 from "../../assets/jpgs/sliderImage3.jpg"
import sliderImage4 from "../../assets/pngs/sliderImage4.png"
const pages = [
    {
        image: sliderImage4,
        title: "մետաղապլաստե դռների և պատուհանների լայն տեսականի",
        description: "Էներգախնայող համակարգեր Favorit Space մատչելի գներով",
        index: 0,
    },
    {
        image: sliderImage,
        title: "մետաղապլաստե դռների և պատուհանների լայն տեսականի2",
        description: "Էներգախնայող համակարգեր Favorit Space մատչելի գներով2",
        index: 1,
    },
    {
        image: sliderImage2,
        title: "մետաղապլաստե դռների և պատուհանների լայն տեսականի3",
        description: "Էներգախնայող համակարգեր Favorit Space մատչելի գներով3",
        index: 2,
    },
    {
        image: sliderImage3,
        title: "մետաղապլաստե դռների և պատուհանների լայն տեսականի4",
        description: "Էներգախնայող համակարգեր Favorit Space մատչելի գներով4",
        index: 3,
    },
]
let isSliding = true
function Slider() {
    const [index, setIndex] = useState(0)
    const sliderRef = useRef(null)
    useEffect(() => {
        if (isSliding) {
            setTimeout(() => {
                if (isSliding) {
                    moveRightLogic()
                }
            }, 3000)
        }
    }, [index])
    function moveRightLogic() {
        if (index < pages.length - 1) {
            setIndex(index + 1)
            sliderRef.current.scrollBy({ left: window.innerWidth })
        }
        else {
            setIndex(0)
            sliderRef.current.scrollTo({ left: 0 })
        }
    }
    const moveRight = (e) => {
        e.preventDefault()
        isSliding = false
        moveRightLogic()
    }
    const moveLeft = (e) => {
        e.preventDefault()
        isSliding = false
        if (index > 0) {
            setIndex(index - 1)
            sliderRef.current.scrollBy({ left: -window.innerWidth })
        }
        else {
            setIndex(pages.length - 1)
            sliderRef.current.scrollTo({ left: window.innerWidth * pages.length })
        }
    }
    return (
        <a href="#advantages" className="toDownLInk">
            <div className={sliderStyles.sliderContainer} id="home" ref={sliderRef}>
                <div className="arrows">
                    <div className="arrow" onClick={(e) => { moveLeft(e) }}></div>
                    <div className="arrow arrow2" onClick={(e) => { moveRight(e) }}></div>
                </div>
                {pages.map((page, i) => {
                    return (
                        <div className={sliderStyles.slider} style={{ backgroundImage: `url(${page.image})` }} key={i}>
                            <div className={sliderStyles.sliderContent}>
                                <h1 className={sliderStyles.title}>{page.title}</h1>
                                <p className={sliderStyles.description}>{page.description}</p>
                            </div>
                        </div>)
                })}
                <div className={sliderStyles.pager}>
                    {pages.map((pageItem, i) => {
                        return <div key={i} style={{ opacity: i === index ? 0.8 : 0.5 }}></div>
                    })}
                </div>
            </div>
        </a>
    )
}

export default Slider