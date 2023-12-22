import { useState } from "react"
import storeStyles from "./Store.module.css"
import WindowPropertyCard from "../../components/WindowPropertyCard/WindowPropertyCard"
import Windows from "../../components/Windows/Windows"
import windowImage from "../../assets/pngs/window2.png"
import windowImage1 from "../../assets/pngs/window.png"
import windowImage2 from "../../assets/pngs/window1.png"
import windowPropImage from "../../assets/pngs/windowPropImg.png"
import windowPropImage2 from "../../assets/pngs/windowPropImg2.png"
import windowPropImage3 from "../../assets/pngs/windowPropImg3.png"
import windowPropImage4 from "../../assets/pngs/windowPropImg4.png"
import windowPropImage5 from "../../assets/pngs/windowPropImg5.png"

function Store() {
    const [selected, setSelected] = useState(null)
    const windowCards = [
        {
            type: "Լուսամուտ",
            image: windowImage,
            title: "Deceuninck Favorit Space 76",
            properties: {
                mechanism: "Maco / Hoppe",
                iron: "1.5մմ",
                cells: "6 հատ",
                glass: "36 մմ (4+4)"
            },
            windowTypes: [
                {
                    image: windowPropImage,
                    width: "240px",
                    height: "260px",
                    prop1: {
                        model: "ALD71-0000",
                        title: "Սպիտակ",
                        price: "57 600",
                        info: "Ապառիկ 6 ամսով 0% մ / 9 600"

                    },
                    prop2: {
                        model: "BLD71-0000",
                        title: "Lամինացված",
                        price: "71 500",
                        info: "Ապառիկ 6 ամսով 0% մ / 11 916",
                    }
                },
                {
                    image: windowPropImage2,
                    width: "240px",
                    height: "260px",
                    prop1: {
                        model: "ALD71-0000",
                        title: "Սպիտակ",
                        price: "55 100",
                        info: "Ապառիկ 6 ամսով 0% մ / 9 183"

                    },
                    prop2: {
                        model: "BLD71-0000",
                        title: "Lամինացված",
                        price: "68 100",
                        info: "Ապառիկ 6 ամսով 0% մ / 11 350",
                    }
                },
                {
                    image: windowPropImage3,
                    width: "280px",
                    height: "216px",
                    prop1: {
                        model: "ALD71-0000",
                        title: "Սպիտակ",
                        price: "51 200",
                        info: "Ապառիկ 6 ամսով 0% մ / 8 533"

                    },
                    prop2: {
                        model: "BLD71-0000",
                        title: "Lամինացված",
                        price: "63 100",
                        info: "Ապառիկ 6 ամսով 0% մ / 10 516",
                    }
                },
                {
                    image: windowPropImage4,
                    width: "280px",
                    height: "216px",
                    prop1: {
                        model: "ALD71-0000",
                        title: "Սպիտակ",
                        price: "62 500",
                        info: "Ապառիկ 6 ամսով 0% մ / 10 416"

                    },
                    prop2: {
                        model: "BLD71-0000",
                        title: "Lամինացված",
                        price: "76 900",
                        info: "Ապառիկ 6 ամսով 0% մ / 12 816",
                    }
                },
                {
                    image: windowPropImage5,
                    width: "135px",
                    height: "260px",
                    prop1: {
                        model: "ALD71-0000",
                        title: "Սպիտակ",
                        price: "83 200",
                        info: "Ապառիկ 6 ամսով 0% մ / 13 866"

                    },
                    prop2: {
                        model: "BLD71-0000",
                        title: "Lամինացված",
                        price: "96 200",
                        info: "Ապառիկ 6 ամսով 0% մ / 16 033",
                    }
                }
            ]
        },
        {
            type: "Լուսամուտ",
            image: windowImage1,
            title: "Deceuninck ECO 60",
            properties: {
                mechanism: "Maco / Hoppe",
                iron: "1.2մմ",
                cells: "4 հատ",
                glass: "24 մմ (4+4)"
            },
            windowTypes: [
                {
                    image: windowPropImage,
                    width: "240px",
                    height: "260px",
                    prop1: {
                        model: "ALD71-0000",
                        title: "Սպիտակ",
                        price: "45 700",
                        info: "Ապառիկ 6 ամսով 0% մ / 7 616"

                    },
                    prop2: {
                        model: "BLD71-0000",
                        title: "Lամինացված",
                        price: "55 700",
                        info: "Ապառիկ 6 ամսով 0% մ / 9 283",
                    }
                },
                {
                    image: windowPropImage2,
                    width: "240px",
                    height: "260px",
                    prop1: {
                        model: "ALD71-0000",
                        title: "Սպիտակ",
                        price: "43 800",
                        info: "Ապառիկ 6 ամսով 0% մ / 7 300"

                    },
                    prop2: {
                        model: "BLD71-0000",
                        title: "Lամինացված",
                        price: "53 100",
                        info: "Ապառիկ 6 ամսով 0% մ / 8 850",
                    }
                },
                {
                    image: windowPropImage3,
                    width: "280px",
                    height: "216px",
                    prop1: {
                        model: "ALD71-0000",
                        title: "Սպիտակ",
                        price: "39 900",
                        info: "Ապառիկ 6 ամսով 0% մ / 6 650"

                    },
                    prop2: {
                        model: "BLD71-0000",
                        title: "Lամինացված",
                        price: "49 100",
                        info: "Ապառիկ 6 ամսով 0% մ / 8 183",
                    }
                },
                {
                    image: windowPropImage4,
                    width: "280px",
                    height: "216px",
                    prop1: {
                        model: "ALD71-0000",
                        title: "Սպիտակ",
                        price: "49 900",
                        info: "Ապառիկ 6 ամսով 0% մ / 8 316"

                    },
                    prop2: {
                        model: "BLD71-0000",
                        title: "Lամինացված",
                        price: "60 500",
                        info: "Ապառիկ 6 ամսով 0% մ / 10 083",
                    }
                },
                {
                    image: windowPropImage5,
                    width: "135px",
                    height: "260px",
                    prop1: {
                        model: "ALD71-0000",
                        title: "Սպիտակ",
                        price: "66 500",
                        info: "Ապառիկ 6 ամսով 0% մ / 11 083"

                    },
                    prop2: {
                        model: "BLD71-0000",
                        title: "Lամինացված",
                        price: "78 900",
                        info: "Ապառիկ 6 ամսով 0% մ / 13 150",
                    }
                }
            ]
        },
        {
            type: "Լուսամուտ",
            image: windowImage2,
            title: "Krauss 58",
            properties: {
                mechanism: "Maco / Hoppe",
                iron: "1.2մմ",
                cells: "3 հատ",
                glass: "24 մմ (4+4)"
            },
            windowTypes: [
                {
                    image: windowPropImage,
                    width: "240px",
                    height: "260px",
                    prop1: {
                        model: "ALD71-0000",
                        title: "Սպիտակ",
                        price: "46 100",
                        info: "Ապառիկ 6 ամսով 0% մ / 7 683"

                    },
                    prop2: {
                        model: "BLD71-0000",
                        title: "Lամինացված",
                        price: "52 300",
                        info: "Ապառիկ 6 ամսով 0% մ / 8 716",
                    }
                },
                {
                    image: windowPropImage2,
                    width: "240px",
                    height: "260px",
                    prop1: {
                        model: "ALD71-0000",
                        title: "Սպիտակ",
                        price: "44 200",
                        info: "Ապառիկ 6 ամսով 0% մ / 7 366"

                    },
                    prop2: {
                        model: "BLD71-0000",
                        title: "Lամինացված",
                        price: "49 900",
                        info: "Ապառիկ 6 ամսով 0% մ / 8 316"
                    }
                },
                {
                    image: windowPropImage3,
                    width: "280px",
                    height: "216px",
                    prop1: {
                        model: "ALD71-0000",
                        title: "Սպիտակ",
                        price: "40 900",
                        info: "Ապառիկ 6 ամսով 0% մ / 6 816"

                    },
                    prop2: {
                        model: "BLD71-0000",
                        title: "Lամինացված",
                        price: "45 900",
                        info: "Ապառիկ 6 ամսով 0% մ / 7 650",
                    }
                },
                {
                    image: windowPropImage4,
                    width: "280px",
                    height: "216px",
                    prop1: {
                        model: "ALD71-0000",
                        title: "Սպիտակ",
                        price: "50 200",
                        info: "Ապառիկ 6 ամսով 0% մ / 8 366"

                    },
                    prop2: {
                        model: "BLD71-0000",
                        title: "Lամինացված",
                        price: "56 800",
                        info: "Ապառիկ 6 ամսով 0% մ / 9 466",
                    }
                },
                {
                    image: windowPropImage5,
                    width: "135px",
                    height: "260px",
                    prop1: {
                        model: "ALD71-0000",
                        title: "Սպիտակ",
                        price: "67 900",
                        info: "Ապառիկ 6 ամսով 0% մ / 11 316"

                    },
                    prop2: {
                        model: "BLD71-0000",
                        title: "Lամինացված",
                        price: "74 700",
                        info: "Ապառիկ 6 ամսով 0% մ / 12 450",
                    }
                }
            ]
        },
        {
            type: "Դուռ",
            image: windowImage2,
            title: "Deceuninck Favorit",
            properties: {
                mechanism: "Maco / Hoppe",
                iron: "1.5մմ",
                cells: "6 հատ",
                glass: "36 մմ (4+4)"
            },
            windowTypes: [
                {
                    image: "",
                    prop1: {
                        model: "ALD71-0000",
                        title: "Սպիտակ",
                        price: "571 6100",
                        info: "Ապառիկ 6 ամսով 0% մ / 9 600"

                    },
                    prop2: {
                        model: "BLD71-0000",
                        title: "Lամինացված",
                        price: "71 500",
                        info: "Ապառիկ 6 ամսով 0% մ / 11 916",
                    }
                },
                {
                    image: "",
                    prop1: {
                        model: "ALD71-0000",
                        title: "Սպիտակ",
                        price: "57 600",
                        info: "Ապառիկ 6 ամսով 0% մ / 9 600"

                    },
                    prop2: {
                        model: "BLD71-0000",
                        title: "Lամինացված",
                        price: "71 500",
                        info: "Ապառիկ 6 ամսով 0% մ / 11 916",
                    }
                },
                {
                    image: "",
                    prop1: {
                        model: "ALD71-0000",
                        title: "Սպիտակ",
                        price: "57 600",
                        info: "Ապառիկ 6 ամսով 0% մ / 9 600"

                    },
                    prop2: {
                        model: "BLD71-0000",
                        title: "Lամինացված",
                        price: "71 500",
                        info: "Ապառիկ 6 ամսով 0% մ / 11 916",
                    }
                },
                {
                    image: "",
                    prop1: {
                        model: "ALD71-0000",
                        title: "Սպիտակ",
                        price: "57 600",
                        info: "Ապառիկ 6 ամսով 0% մ / 9 600"

                    },
                    prop2: {
                        model: "BLD71-0000",
                        title: "Lամինացված",
                        price: "71 500",
                        info: "Ապառիկ 6 ամսով 0% մ / 11 916",
                    }
                },
                {
                    image: "",
                    prop1: {
                        model: "ALD71-0000",
                        title: "Սպիտակ",
                        price: "57 600",
                        info: "Ապառիկ 6 ամսով 0% մ / 9 600"

                    },
                    prop2: {
                        model: "BLD71-0000",
                        title: "Lամինացված",
                        price: "71 500",
                        info: "Ապառիկ 6 ամսով 0% մ / 11 916",
                    }
                }
            ]
        },
        {
            type: "Դուռ",
            image: windowImage2,
            title: "Deceuninck Favorit",
            properties: {
                mechanism: "Maco / Hoppe",
                iron: "1.5մմ",
                cells: "6 հատ",
                glass: "36 մմ (4+4)"
            },
            windowTypes: [
                {
                    image: "",
                    prop1: {
                        model: "ALD71-0000",
                        title: "Սպիտակ",
                        price: "17 600",
                        info: "Ապառիկ 6 ամսով 0% մ / 9 600"

                    },
                    prop2: {
                        model: "BLD71-0000",
                        title: "Lամինացված",
                        price: "711 500",
                        info: "Ապառիկ 6 ամսով 0% մ / 11 916",
                    }
                },
                {
                    image: "",
                    prop1: {
                        model: "ALD71-0000",
                        title: "Սպիտակ Text",
                        price: "51 650",
                        info: "Ապառիկ 6 ամսով 0% մ / 9 600"

                    },
                    prop2: {
                        model: "BLD71-0000",
                        title: "Lամինացված yeah",
                        price: "71 500",
                        info: "Ապառիկ 6 ամսով 0% մ / 11 916",
                    }
                },
                {
                    image: "",
                    prop1: {
                        model: "ALD71-0000",
                        title: "Սպիտակ",
                        price: "57 600",
                        info: "Ապառիկ 6 ամսով 0% մ / 9 600"

                    },
                    prop2: {
                        model: "BLD71-0000",
                        title: "Lամինացված",
                        price: "71 500",
                        info: "Ապառիկ 6 ամսով 0% մ / 11 916",
                    }
                },
                {
                    image: "",
                    prop1: {
                        model: "ALD71-0000",
                        title: "Սպիտակ",
                        price: "57 600",
                        info: "Ապառիկ 6 ամսով 0% մ / 9 600"

                    },
                    prop2: {
                        model: "BLD71-0000",
                        title: "Lամինացված",
                        price: "71 500",
                        info: "Ապառիկ 6 ամսով 0% մ / 11 916",
                    }
                },
                {
                    image: "",
                    prop1: {
                        model: "ALD71-0000",
                        title: "Սպիտակ",
                        price: "57 600",
                        info: "Ապառիկ 6 ամսով 0% մ / 9 600"

                    },
                    prop2: {
                        model: "BLD71-0000",
                        title: "Lամինացված",
                        price: "71 500",
                        info: "Ապառիկ 6 ամսով 0% մ / 11 916",
                    }
                }
            ]
        },
        {
            type: "Դուռ",
            image: windowImage2,
            title: "Deceuninck Favorit",
            properties: {
                mechanism: "Maco / Hoppe",
                iron: "1.5մմ",
                cells: "6 հատ",
                glass: "36 մմ (4+4)"
            },
            windowTypes: [
                {
                    image: "",
                    prop1: {
                        model: "ALD71-0000",
                        title: "Սպիտակ",
                        price: "17 600",
                        info: "Ապառիկ 6 ամսով 0% մ / 9 600"

                    },
                    prop2: {
                        model: "BLD71-0000",
                        title: "Lամինացված",
                        price: "711 500",
                        info: "Ապառիկ 6 ամսով 0% մ / 11 916",
                    }
                },
                {
                    image: "",
                    prop1: {
                        model: "ALD71-0000",
                        title: "Սպիտակ Text",
                        price: "51 650",
                        info: "Ապառիկ 6 ամսով 0% մ / 9 600"

                    },
                    prop2: {
                        model: "BLD71-0000",
                        title: "Lամինացված yeah",
                        price: "71 500",
                        info: "Ապառիկ 6 ամսով 0% մ / 11 916",
                    }
                },
                {
                    image: "",
                    prop1: {
                        model: "ALD71-0000",
                        title: "Սպիտակ",
                        price: "57 600",
                        info: "Ապառիկ 6 ամսով 0% մ / 9 600"

                    },
                    prop2: {
                        model: "BLD71-0000",
                        title: "Lամինացված",
                        price: "71 500",
                        info: "Ապառիկ 6 ամսով 0% մ / 11 916",
                    }
                },
                {
                    image: "",
                    prop1: {
                        model: "ALD71-0000",
                        title: "Սպիտակ",
                        price: "57 600",
                        info: "Ապառիկ 6 ամսով 0% մ / 9 600"

                    },
                    prop2: {
                        model: "BLD71-0000",
                        title: "Lամինացված",
                        price: "71 500",
                        info: "Ապառիկ 6 ամսով 0% մ / 11 916",
                    }
                },
                {
                    image: "",
                    prop1: {
                        model: "ALD71-0000",
                        title: "Սպիտակ",
                        price: "57 600",
                        info: "Ապառիկ 6 ամսով 0% մ / 9 600"

                    },
                    prop2: {
                        model: "BLD71-0000",
                        title: "Lամինացված",
                        price: "71 500",
                        info: "Ապառիկ 6 ամսով 0% մ / 11 916",
                    }
                }
            ]
        }
    ]
    return (
        <a href="#about" className="toDownLInk">
            <div id="store" className={storeStyles.store}>
                <h1 className="title">
                    տեսականի
                </h1>
                <Windows 
                    selected={selected}
                    setSelected={setSelected}
                    windowCards={windowCards}
                    styles={storeStyles}/>
                <div className={storeStyles.windowProperties} id="windowProperties">
                    {selected!==null ? windowCards[selected].windowTypes.map((windowType, index) => {
                        return <WindowPropertyCard image={windowType.image} width={windowType.width} height={windowType.height} props1={windowType.prop1} props2={windowType.prop2} key={index} />
                    }):""}
                </div>
            </div>
        </a>
    )
}
export default Store