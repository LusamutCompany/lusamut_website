import headerStyles from "./Header.module.css"
import logo from "./../../assets/svgs/logo.svg"
import instagramIcon from "../../assets/svgs/Instagram1.svg"
import callIcon from "../../assets/svgs/Call.svg"
import menuIcon from "../../assets/svgs/Menu.svg"
import closeMenuIcon from "../../assets/svgs/closeMenu.svg"
import { useState } from "react"

function Header({state}) {
    const [openedPage,setOpenedPage] = state 
    const [isOpen, setIsOpen] = useState(false)
    const openMenu = () => {
        setIsOpen(true)
    }
    const closeMenu = () => {
        setIsOpen(false)
    }
    const pages = [
        ["ԳԼԽԱՎՈՐ", "#home"],
        ["ԱՌԱՎԵԼՈՒԹՅՈՒՆՆԵՐ", "#advantages"],
        ["ՏԵՍԱԿԱՆԻ", "#store"],
        ["ՄԵՐ ՄԱՍԻՆ", "#about"],
        ["ԿԱՊ", "#contactForm"],
    ]
    return (
        <section className={headerStyles.header} id="header">
            <div className={headerStyles.menu}>
                <img className={headerStyles.companyLogo} src={logo} width="220px" height="77px" />
                <div className={headerStyles.pages}>
                    {pages.map((item, index) => {
                        return <a
                            key={index}
                            href={item[1]}
                            className={headerStyles.page}
                            onClick={() => { setOpenedPage(index) }}>
                            <h1 style={{ color: index === openedPage ? "#000" : "" }}>{item[0]}</h1>
                        </a>
                    })}
                </div>
            </div>
            <div className={headerStyles.extras}>
                <div>
                    <div className={headerStyles.contact}>
                        <a href="tel:+37433747474"><p className={headerStyles.phoneNumber}>+374 33 74 74 74</p></a>
                        <a href="#contact"><button className={headerStyles.contactButton}>ԿԱՊՎԵԼ</button></a>
                    </div>
                </div>
            </div>
            <div className={headerStyles.mobileHeader}>
                <a href="https://www.instagram.com/lusamut_am/" target="_blank"><img src={instagramIcon} alt="" width="32px" height="32px" /></a>
                <a href="tel:+37433747474"><img src={callIcon} alt="" width="32px" height="32px" /></a>
                <img src={menuIcon} alt="" width="32px" height="32px" onClick={openMenu} />
            </div>
            {isOpen ? (
                <div className={headerStyles.mobileMenu}>
                    <img src={closeMenuIcon} alt="" width="32px" height="32px" className={headerStyles.closeIcon} onClick={closeMenu} />
                    <div className={headerStyles.mobilePages}>
                        {pages.map((item, index) => {
                            return <a
                                key={index}
                                href={item[1]}
                                className={headerStyles.page}
                                onClick={() => { setOpenedPage(index); closeMenu() }}>
                                <h1 style={{ color: index === openedPage ? "#000" : "" }}>{item[0]}</h1>
                            </a>
                        })}
                    </div>
                    <a href="#contact"><button className={headerStyles.contactButton} onClick={closeMenu}>ԿԱՊՎԵԼ</button></a>
                </div>
            ) : ""}
        </section>
    )
}
export default Header