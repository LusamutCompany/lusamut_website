import { useEffect, useState } from "react"
import sliderStyles from "./Slider.module.css"
function Slider() {
    const [pages, setPages] = useState([
        {
            image: "",
            title: "մետաղապլաստե դռների և պատուհանների լայն տեսականի",
            description: "Էներգախնայող համակարգեր Favorit Space մատչելի գներով",
            index: 0,
        },
        {
            image: "",
            title: "մետաղապլաստե դռների և պատուհանների լայն տեսականի2",
            description: "Էներգախնայող համակարգեր Favorit Space մատչելի գներով2",
            index: 1,
        },
        {
            image: "",
            title: "մետաղապլաստե դռների և պատուհանների լայն տեսականի3",
            description: "Էներգախնայող համակարգեր Favorit Space մատչելի գներով3",
            index: 2,
        },
        {
            image: "",
            title: "մետաղապլաստե դռների և պատուհանների լայն տեսականի4",
            description: "Էներգախնայող համակարգեր Favorit Space մատչելի գներով4",
            index: 3,
        },
    ])
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
        <div className={sliderStyles.slider} style={{backgroundImage: pages[index].image}} id="home">
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
    )
}

export default Slider