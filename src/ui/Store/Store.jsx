import { useState } from "react"
import storeStyles from "./Store.module.css"
import WindowPropertyCard from "../../components/WindowPropertyCard/WindowPropertyCard"
import Windows from "../../components/Windows/Windows"
import windowImage1 from "../../assets/pngs/window1.png"
import windowImage2 from "../../assets/pngs/window2.png"
import windowImage3 from "../../assets/pngs/window3.png"
import windowImage4 from "../../assets/pngs/window4.png"
import windowImage5 from "../../assets/pngs/window5.png"
function Store() {
    const [selected, setSelected] = useState(0)
    const windowCards = [
        {
            image: windowImage1,
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
                        price: "97 600",
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
            image: windowImage3,
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
                        price: "517 600",
                        info: "Ապառիկ 6 ամսով 0% մ / 9 600"

                    },
                    prop2: {
                        model: "BLD71-0000",
                        title: "Lամինացված",
                        price: "11 500",
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
            image: windowImage4,
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
            image: windowImage5,
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
        <div id="store" className={storeStyles.store}>
            <h1 className="title">
                տեսականի
            </h1>
            <Windows selected={selected} setSelected={setSelected} windowCards={windowCards} styles={storeStyles}/>
            <div className={storeStyles.windowProperties}>
                {windowCards[selected].windowTypes.map((windowType, index) => {
                    return <WindowPropertyCard image={windowType.image} props1={windowType.prop1} props2={windowType.prop2} key={index} />
                })}
            </div>
            <Windows selected={selected} setSelected={setSelected} windowCards={windowCards} styles={storeStyles} forMobile/>
        </div>
    )
}
export default Store