import windowCardStyles from "./WindowCard.module.css"
import shareImage from "../../assets/svgs/Share.svg"
function WindowCard({ image, title, properties, isSelected, index, setSelected,type}) {
    return (
        <a href="#windowProperties" key={index}>
        <div className={isSelected ? windowCardStyles.selectedCard : windowCardStyles.card} onClick={() => { setSelected(index) }}>
            <h1 className={windowCardStyles.windowType}>{type}</h1>
            <button><span>Կիսվել</span><img className={windowCardStyles.shareIcon} src={shareImage} width="16px" height="16px"/></button>
            <img src={image} alt="" width="135.535px" height="186px" className={windowCardStyles.image}/>
            <h1 className={windowCardStyles.title}>{title}</h1>
            <div className={windowCardStyles.properties}>
                <span>
                    <p>Մեխանիզմ / Բռնակ</p>
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
        </a>
    )
}
export default WindowCard