import cards from "./data"
import Card from "../../components/Card/Card"
import advantagesStyles from "./AdvantagesPage.module.css"
function AdvantagesPage({ state }) {
    return (
        <div className={advantagesStyles.container} id="advantages">
            <a className={advantagesStyles.link + " toDownLInk"} href="#store" onClick={() => { state[1](2) }}></a>
            <h1 className="title">ԱՌԱՎԵԼՈՒԹՅՈՒՆՆԵՐ</h1>
            <div className={advantagesStyles.cards}>
                {cards.map((card, index) => {
                    return <Card image={card.image} title={card.title} description={card.description} key={index} />
                })}
            </div>
        </div>
    )
}

export default AdvantagesPage