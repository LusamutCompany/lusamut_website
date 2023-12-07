import { useState } from "react"
import WindowCard from "../../components/WindowCard/WindowCard"
import storeStyles from "./Store.module.css"
import WindowPropertyCard from "../../components/WindowPropertyCard/WindowPropertyCard"
function Store() {
    const [selected, setSelected] = useState(0)
    const windowCards = [
        {
            image: "",
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
            image: "",
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
            image: "",
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
            image: "",
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
            image: "",
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
            <div className={storeStyles.windows}>
                {
                    windowCards.map((item, index) => {
                        return (
                            <WindowCard
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
            </div>
            <div className={storeStyles.windowProperties}>
                {windowCards[selected].windowTypes.map((windowType, index) => {
                    return <WindowPropertyCard image={windowType.image} props1={windowType.prop1} props2={windowType.prop2} key={index} />
                })}
            </div>
        </div>
    )
}
export default Store