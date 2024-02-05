import { useState } from "react"
import storeStyles from "./Store.module.css"
import WindowPropertyCard from "../../components/WindowPropertyCard/WindowPropertyCard"
import Windows from "../../components/Windows/Windows"
import windowCards from "./data"
function Store({ state }) {
    const [selected, setSelected] = useState(null)

    return (
        <div id="store" className={storeStyles.store}>
            <a className={storeStyles.link + " toDownLInk"} href="#about" onClick={()=>{state[1](3)}}></a>
            <h1 className="title">
                տեսականի
            </h1>
            <Windows
                selected={selected}
                setSelected={setSelected}
                windowCards={windowCards}
                styles={storeStyles} />
            <div className={storeStyles.windowProperties} id="windowProperties">
                {selected !== null ? windowCards[selected].windowTypes.map((windowType, index) => {
                    return <WindowPropertyCard image={windowType.image} width={windowType.width} height={windowType.height} props1={windowType.prop1} props2={windowType.prop2} key={index} />
                }) : ""}
            </div>
        </div>
    )
}
export default Store