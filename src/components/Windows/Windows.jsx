import { useEffect, useRef, useState } from "react"
import WindowCard from "../WindowCard/WindowCard"
let isSliding = true
function Windows({ selected, setSelected, windowCards, styles }) {
    const windowsRef = useRef(null)
    const [index, setIndex] = useState(0)
    const pages = windowCards
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
        windowsRef.current.scrollBy({ left: window.innerHeight })
    }
    const moveRight = () => {
        isSliding = false
        moveRightLogic()
    }
    const moveLeft = () => {
        isSliding = false
        windowsRef.current.scrollBy({ left: -window.innerHeight })
    }
    return (
        <div className={styles.windows} onClick={(e) => { e.preventDefault() }} ref={windowsRef}>
            <div className={styles.absoluteBackground}></div>
            <div className="arrows">
                <div className="arrow" onClick={moveLeft}></div>
                <div className="arrow arrow2" onClick={moveRight}></div>
            </div>
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
        </div>
    )
}
export default Windows