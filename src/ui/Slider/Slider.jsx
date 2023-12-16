import { useEffect, useState } from "react"
import sliderStyles from "./Slider.module.css"
import sliderImage from "../../assets/jpgs/sliderImage.jpg"
import sliderImage2 from "../../assets/jpgs/sliderImage2.jpg"
import sliderImage3 from "../../assets/jpgs/sliderImage3.jpg"
import sliderImage4 from "../../assets/pngs/sliderImage4.png"
const pages = [
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
    {
        image: sliderImage4,
        title: "մետաղապլաստե դռների և պատուհանների լայն տեսականի",
        description: "Էներգախնայող համակարգեր Favorit Space մատչելի գներով",
        index: 0,
    }
]
function Slider() {
    const [index, setIndex] = useState(0)
    useEffect(() => {
        setTimeout(() => {
            if (index + 1 >= pages.length) {
                setIndex(0)
            }
            else {
                setIndex(index + 1)
            }
        }, 1000)
    }, [index])
    return (
        <a href="#advantages" className="toDownLInk">
            <div className={sliderStyles.slider} style={{backgroundImage: `url(${pages[index].image})`}} id="home">
            <div className={sliderStyles.sliderContent}>
                <h1 className={sliderStyles.title}>{pages[index].title}</h1>
                <p className={sliderStyles.description}>{pages[index].description}</p>
                <div className={sliderStyles.pager}>
                    {pages.map((pageItem,i)=>{
                        return <div key={i} style={{opacity: i===index ? 0.8 : 0.5}}></div>
                    })}
                </div>
            </div>
        </div>
        </a>
    )
}

export default Slider