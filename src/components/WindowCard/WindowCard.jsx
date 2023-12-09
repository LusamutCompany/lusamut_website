import windowCardStyles from "./WindowCard.module.css"
import shareImage from "../../assets/svgs/Share.svg"
function WindowCard({ image, title, properties, isSelected, index, setSelected }) {
    return (
        <div className={isSelected ? windowCardStyles.selectedCard : windowCardStyles.card} onClick={() => { setSelected(index) }}>
            <button><span>Կիսվել</span><img src={shareImage} width="16px" height="16px"/></button>
            <img src={"https://s3-alpha-sig.figma.com/img/4373/da72/3ba38117f6d6886d0c05a5dac30a0c48?Expires=1702857600&Signature=BnkulE03Nn2mLJv44b2f23KfNhNXJZZanvdhQtGCJJwWxXuWHd-~KvGeBpCU9fav02JNvXObtKFcGvEBaLbAB09e7pO5GH9RB-PG3~Blk0B5PorKXTVbuYPwsHpej9-m5ZPhpiVmewRSpuKSoWnfCkDnKfYtyW~bkCrCj68Z1Scj1wCUHCW14lshyssQRRu1lrjSKURxfzTgKloTMmvpLqaQzV2mL9CPYKiFDW0OHiToIRbvVL-pPZ~ldUL9Jqj-D75gj-fifEyj4DsOck7vfyojiWWdxRWW6epv7NiDn9pgogGwB0G1oGCoaetvXLyDApJcg9ymk4uJbPKu4DZv6A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} alt="" width="135.535px" height="186px" />
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