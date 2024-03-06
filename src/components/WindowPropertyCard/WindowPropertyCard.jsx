import windowStyles from "../WindowPropertyCard/WindowPropertyCard.module.css"
function WindowPropertyCard({ image, width, height, props1, props2 }) {
    return (
        <div className={windowStyles.card}>
            <div className={windowStyles.imageCont}>
                <img src={image} width={width} height={height}/>
            </div>
            <div className={windowStyles.properties}>
                <div>
                    <h1 className={windowStyles.title}>{props1.title}  մ<sup>2</sup> </h1>
                    <h1 className={windowStyles.price}>{props1.price} </h1>
                    <p>{props1.info}  մ<sup>2</sup> / {props1.info2}</p>
                </div>
                <div>
                    <h1 className={windowStyles.title}>{props2.title}  մ<sup>2</sup> </h1>
                    <h1 className={windowStyles.price}>{props2.price}</h1>
                    <p>{props2.info} մ<sup>2</sup> / {props2.info2}</p>
                </div>
            </div>
        </div>
    )
}
export default WindowPropertyCard