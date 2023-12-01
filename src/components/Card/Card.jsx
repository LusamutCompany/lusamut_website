import cardStyles from "./Card.module.css"
function Card({image,title,description}){
    return (
        <div className={cardStyles.card}>
            <img src={image} alt="" width="124px" height="124px"/>
            <h1 className={cardStyles.title}>{title}</h1>
            <p className={cardStyles.description}>{description}</p>
        </div>
    )
}
export default Card