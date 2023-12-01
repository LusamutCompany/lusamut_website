import advantagesStyles from "./AdvantagesPage.module.css"
import Card from "../../components/Card/Card"
import CalendarIcon from "../../assets/svgs/Calendar Icon.svg"
import CheckIcon from "../../assets/svgs/Check Icon.svg"
import EcoIcon from "../../assets/svgs/Eco Icon.svg"
import GuaranteeIcon from "../../assets/svgs/Guarantee Icon.svg"
import MedalIcon from "../../assets/svgs/Medal Icon.svg"
import PrizeIcon from "../../assets/svgs/Prize icon.svg"
function AdvantagesPage() {
    const cards = [
        {
            image: PrizeIcon,
            title: "3-րդն աշխարհում",
            description: "Էներգախնայող համակարգեր Favorit Space մատչելի գներով"
        },
        {
            image: CalendarIcon,
            title: "80 տարի շուկայում",
            description: "Էներգախնայող համակարգեր Favorit Space մատչելի գներով"
        },
        {
            image: CheckIcon,
            title: "32 հսկիչ պարամետրեր",
            description: "Էներգախնայող համակարգեր Favorit Space մատչելի գներով"
        },
        {
            image: EcoIcon,
            title: "Էկոլոգիապես մաքուր արտադրանք",
            description: "Էներգախնայող համակարգեր Favorit Space մատչելի գներով"
        },
        {
            image: GuaranteeIcon,
            title: "10 տարի երաշխիք",
            description: "Էներգախնայող համակարգեր Favorit Space մատչելի գներով"
        },
        {
            image: MedalIcon,
            title: "Ամենաբարձր վարկանիշ",
            description: "Էներգախնայող համակարգեր Favorit Space մատչելի գներով"
        }
    ]
    return (
        <div className={advantagesStyles.container} id="advantages">
            <h1 className={advantagesStyles.title}>առավելություններ</h1>
            <div className={advantagesStyles.cards}>
                {cards.map((card,index)=>{
                    return <Card image={card.image} title={card.title} description={card.description}/> 
                })}
            </div>
        </div>
    )
}

export default AdvantagesPage