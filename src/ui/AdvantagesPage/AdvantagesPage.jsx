import cards from "./data"
import Card from "../../components/Card/Card"
import advantagesStyles from "./AdvantagesPage.module.css"
function AdvantagesPage() {
    return (
        <a href="#store" className="toDownLInk">
        <div className={advantagesStyles.container} id="advantages">
            <h1 className="title">ԱՌԱՎԵԼՈՒԹՅՈՒՆՆԵՐ</h1>
            <div className={advantagesStyles.cards}>
                {cards.map((card,index)=>{
                    return <Card image={card.image} title={card.title} description={card.description} key={index}/> 
                })}
            </div>
        </div>
        </a>
    )
}

export default AdvantagesPage