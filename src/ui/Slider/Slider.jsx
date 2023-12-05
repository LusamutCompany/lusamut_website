import { useEffect, useState } from "react"
import sliderStyles from "./Slider.module.css"
function Slider() {
    const [pages, setPages] = useState([
        {
            image: "https://s3-alpha-sig.figma.com/img/9c22/89ca/bcd2fb39f01c030771325031535f15b4?Expires=1702857600&Signature=TvOWaCUa-w2TNVQIChovllJ8bFRqit-NDkHmR8SDDKqCO7LrI9Ocfmv48-j8vuvjNlP7sd4NXP08xYr73Kx74lpzLsqesotsXEH6qzaF9XZnOfJ2aeJru8c18Fg~GGJl3fyBZX4Jxxrse7dAyTKbtMiWMK1hg5fCAlJwzaCQg-z8ZMPj3A66Wo87bqliX~S69wFvBqNHq-hxbFpEdrrx1ca0hu8d8PKakFCQONZD0z-ARs6NBnxvlG2E94yL6xHAvWr9Hbhb802szeKUFZH5IJ1Ndv9antK7kbicikzBOTFpDVL69ETY8BfA7bZN-p2MAelWff6zNFyUU4MvPCDreQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            title: "մետաղապլաստե դռների և պատուհանների լայն տեսականի",
            description: "Էներգախնայող համակարգեր Favorit Space մատչելի գներով",
            index: 0,
        },
        {
            image: "https://s3-alpha-sig.figma.com/img/9c22/89ca/bcd2fb39f01c030771325031535f15b4?Expires=1702857600&Signature=TvOWaCUa-w2TNVQIChovllJ8bFRqit-NDkHmR8SDDKqCO7LrI9Ocfmv48-j8vuvjNlP7sd4NXP08xYr73Kx74lpzLsqesotsXEH6qzaF9XZnOfJ2aeJru8c18Fg~GGJl3fyBZX4Jxxrse7dAyTKbtMiWMK1hg5fCAlJwzaCQg-z8ZMPj3A66Wo87bqliX~S69wFvBqNHq-hxbFpEdrrx1ca0hu8d8PKakFCQONZD0z-ARs6NBnxvlG2E94yL6xHAvWr9Hbhb802szeKUFZH5IJ1Ndv9antK7kbicikzBOTFpDVL69ETY8BfA7bZN-p2MAelWff6zNFyUU4MvPCDreQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            title: "մետաղապլաստե դռների և պատուհանների լայն տեսականի2",
            description: "Էներգախնայող համակարգեր Favorit Space մատչելի գներով2",
            index: 1,
        },
        {
            image: "https://s3-alpha-sig.figma.com/img/9c22/89ca/bcd2fb39f01c030771325031535f15b4?Expires=1702857600&Signature=TvOWaCUa-w2TNVQIChovllJ8bFRqit-NDkHmR8SDDKqCO7LrI9Ocfmv48-j8vuvjNlP7sd4NXP08xYr73Kx74lpzLsqesotsXEH6qzaF9XZnOfJ2aeJru8c18Fg~GGJl3fyBZX4Jxxrse7dAyTKbtMiWMK1hg5fCAlJwzaCQg-z8ZMPj3A66Wo87bqliX~S69wFvBqNHq-hxbFpEdrrx1ca0hu8d8PKakFCQONZD0z-ARs6NBnxvlG2E94yL6xHAvWr9Hbhb802szeKUFZH5IJ1Ndv9antK7kbicikzBOTFpDVL69ETY8BfA7bZN-p2MAelWff6zNFyUU4MvPCDreQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            title: "մետաղապլաստե դռների և պատուհանների լայն տեսականի3",
            description: "Էներգախնայող համակարգեր Favorit Space մատչելի գներով3",
            index: 2,
        },
        {
            image: "https://s3-alpha-sig.figma.com/img/9c22/89ca/bcd2fb39f01c030771325031535f15b4?Expires=1702857600&Signature=TvOWaCUa-w2TNVQIChovllJ8bFRqit-NDkHmR8SDDKqCO7LrI9Ocfmv48-j8vuvjNlP7sd4NXP08xYr73Kx74lpzLsqesotsXEH6qzaF9XZnOfJ2aeJru8c18Fg~GGJl3fyBZX4Jxxrse7dAyTKbtMiWMK1hg5fCAlJwzaCQg-z8ZMPj3A66Wo87bqliX~S69wFvBqNHq-hxbFpEdrrx1ca0hu8d8PKakFCQONZD0z-ARs6NBnxvlG2E94yL6xHAvWr9Hbhb802szeKUFZH5IJ1Ndv9antK7kbicikzBOTFpDVL69ETY8BfA7bZN-p2MAelWff6zNFyUU4MvPCDreQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
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
    )
}

export default Slider