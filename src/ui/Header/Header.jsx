import headerStyles from "./Header.module.css"
import logo from "./../../assets/svgs/logo.svg"

function Header() {
    let pages = [
        ["Գլխավոր", "#home"],
        ["առավելություններ", "#advantages"],
        ["տեսականի", "#store"],
        ["Մեր մասին", "#about"],
        ["կապ", "#contact"],
    ]
    return (
        <section className={headerStyles.header}>
            <div className={headerStyles.menu}>
                <img className={headerStyles.companyLogo} src={logo} width="220px" height="77px" />
                <div className={headerStyles.pages}>
                    {pages.map((item, index) => {
                        return <a key={index} href={item[1]} className={headerStyles.page}><h1>{item[0]}</h1></a>
                    })}
                </div>
            </div>
            <div className={headerStyles.extras}>
                <div>
                    <div className={headerStyles.contact}>
                        <p className={headerStyles.phoneNumber}>+374 98 123 456</p>
                        <a href="tel:+37498123456"><button className={headerStyles.contactButton}>Contact us</button></a>
                    </div>
                    <div className={headerStyles.languages}>
                        <p>Eng</p>
                        <p className={headerStyles.selected}>Հայ</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Header