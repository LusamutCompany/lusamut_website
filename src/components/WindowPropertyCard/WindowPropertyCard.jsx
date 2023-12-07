import windowStyles from "../WindowPropertyCard/WindowPropertyCard.module.css"
// model,title,price,info
function WindowPropertyCard({ image, props1, props2 }) {
    return (
        <div className={windowStyles.card}>
            <img src={"https://s3-alpha-sig.figma.com/img/7c9b/019c/9979b22ca0cc341c6aad6ffe7821967b?Expires=1702857600&Signature=eFk1glY-h9UZ8RU1VEQJBx~KrHvLE03TZFTAQ0r~UMzCF-auOx-1gq2Mb7Lbg7WWicCoT9Vf0Oah1MdO~H4gM7Zl8-JUc4GQV63REbSJj~vi3QjfslGdA6Z0WLGivLrJ~RiDzSnesLnC6O40dJwEcYDKHfsBU6Yd0UZvCQDhuRUOeoB-Bx4drBrjxl~TKG92NjMCCydR4Rx-2gtYH6OnNWrstgUr4VH8Nj3p-TWOzFcSIu6sqaYvUGeQRvsKaHpc~tT7lv~1ZRYhZ95tkSFTEoNafaYnIPcewQpssy4454m83C4gcCQDvA9qacFDrPJSlTkU1Og2sh5cXiEU7-RgTw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} alt="" width="100%" height={image.height} />
            <div className={windowStyles.properties}>
                <div>
                    <p>{props1.model}</p>
                    <h1 className={windowStyles.title}>{props1.title}</h1>
                    <h1 className={windowStyles.price}>{props1.price} <span>(մ<sup>2</sup>)</span></h1>
                    <p>{props1.info}</p>
                </div>
                <div>
                    <p>{props2.model}</p>
                    <h1 className={windowStyles.title}>{props2.title}</h1>
                    <h1 className={windowStyles.price}>{props2.price}<span>(մ<sup>2</sup>)</span></h1>
                    <p>{props2.info}</p>
                </div>
            </div>
        </div>
    )
}
export default WindowPropertyCard