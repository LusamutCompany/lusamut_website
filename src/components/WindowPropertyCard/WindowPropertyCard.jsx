import windowStyles from "../WindowPropertyCard/WindowPropertyCard.module.css"
// model,title,price,info
function WindowPropertyCard({ image, width, height, props1, props2 }) {
    return (
        <div className={windowStyles.card} onClick={(e) => { e.preventDefault() }}>
            <img src={image} width={width} height={height}/>
            <div className={windowStyles.properties}>
                <div>
                    <p>{props1.model}</p>
                    <h1 className={windowStyles.title}>{props1.title}</h1>
                    <h1 className={windowStyles.price}>{props1.price} <span>մ<sup>2</sup></span></h1>
                    <p>{props1.info}  մ<sup>2</sup> / {props1.info2}</p>
                </div>
                <div>
                    <p>{props2.model}</p>
                    <h1 className={windowStyles.title}>{props2.title}</h1>
                    <h1 className={windowStyles.price}>{props2.price}<span>մ<sup>2</sup></span></h1>
                    <p>{props2.info} մ<sup>2</sup> / {props2.info2}</p>
                </div>
            </div>
        </div>
    )
}
export default WindowPropertyCard