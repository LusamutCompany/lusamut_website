import windowCardStyles from "./WindowCard.module.css"
import shareImage from "../../assets/svgs/Share.svg"
function WindowCard({ image, title, properties, isSelected, index, setSelected }) {
    return (
        <div className={isSelected ? windowCardStyles.selectedCard : windowCardStyles.card} onClick={() => { setSelected(index) }}>
            <button><span>Կիսվել</span><img src={shareImage} width="16px" height="16px"/></button>
            <img src={image} alt="" width="135.535px" height="186px" />
            <h1 className={windowCardStyles.title}>{title}</h1>
            <div className={windowCardStyles.properties}>
                <span>
                    <p>Մեխանիզմ</p>
                    <p>{properties.mechanism}</p>
                </span>
                <span>
                    <p>Երկաթ</p>
                    <p>{properties.iron}</p>
                </span>
                <span>
                    <p>Խցիկներ</p>
                    <p>{properties.cells}</p>
                </span>
                <span>
                    <p>Ապակի</p>
                    <p>{properties.glass}</p>
                </span>
            </div>
        </div>
    )
}
export default WindowCard