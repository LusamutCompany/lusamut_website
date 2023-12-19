import { useState, useRef, useEffect } from "react"
import aboutStyles from "./About.module.css"
import aboutImage from "./../../assets/pngs/Image.png"
import firstPartner from "./../../assets/jpgs/gorcnker.jpg"
import secondPartner from "./../../assets/jpgs/gorcnker2.jpg"

const pages = [
  {
    title: "ՄԵՐ ՄԱՍԻՆ",
    text: " Հայտնի է, որ ընթերցողը, կարդալով հասկանալի տեքստ, չի կարողանա կենտրոնանալ տեքստի ձևավորման վրա: Lorem Ipsum օգտագործելը բացատրվում է նրանով, որ այն բաշխում է բառերը քիչթե շատ իրականի նման, ի տարբերություն «Բովանդակություն, բովանդակություն» սովորական կրկննության, ինչը ընթերցողի համար հասկանալի է:",
    text2: " Շատ համակարգչային տպագրական ծրագրեր և ինտերնետային էջերի խմբագրիչներ այն օգտագործում են որպես իրենց ստանդարտ տեքստային մոդել, և հետևապես, ինտերնետում Lorem Ipsum-ի որոնման արդյունքում կարելի է հայտնաբերել էջեր, որոնք դեռ նոր են կերտվում:",
    image: aboutImage
  },
  {
    title: "ՄԵՐ ԳՈՐԾԸՆԿԵՐՆԵՐԸ",
    text: " Լուսամուտների մեխանիզմներ արտադրող գործարանների շարքում MACO ավստրիական ըկերությունը հիմնադրվել է 1947 թվականին Լորեց Մայերի կողմից։ MACO- ի մասնաճյուղերը գործում են աշխարհի ավելի քան 20 երկրներում։ Սակայն բոլոր մեխանիզմները MACO-ն արտադրում է բացառապես Ավստրիայում՝  պահպանելով որակի բարձրագույն ստանդրտները:",
    text2: "Զալցբուրգի MACO-ի տարածքում գործում է հզոր գիտահետազոտական կենտրոն, որը դռների և լուսամուտների մեխանիզմները հասցնում է  ժամանակակից գիտական տեխնոլոգիաների մակարդակին",
    image: firstPartner
  },
  {
    title: "ՄԵՐ ԳՈՐԾԸՆԿԵՐՆԵՐԸ",
    text: " Բելգիական deceuninck ընկերությունը լուսամուտների և դռների պրոֆիլներ արտադրող աշխարհի լավագույն ընկերություններից է։ Ընկերությունը ստեղծվել է 1937թ և ունի ավելի քան 85 տարվա փորձ։  deceuninck-ը սպասարկում է հաճախորդներին 91 երկրներում, ունի 17 գործարան աշխարհում։",
    text2: " Պրոֆիլները արտադրվում են  32 պարամետրերի որակի հսկողությամբ։ Արտադրությունում օգտագործվում է բացառապես  A + դասի PVC: 76 մմ հաստությամբ FAVORIT SPACE պրոֆիլներն ունեն 6 ջերմամեկուսացման խցիկներ։ Մեջտեղում տեղադրված է լրացուցիչ ռետինե շերտ՝  լրացնելով դրսի և ներսի մեկուսիչները։",
    image: secondPartner
  }
]
let isSliding = true
function About() {
  const aboutRef = useRef(null)
  const [index, setIndex] = useState(0)
  useEffect(() => {
    if (isSliding) {
      setTimeout(() => {
        if(isSliding){
          moveRightLogic()
        }
      }, 3000)
    }
  }, [index])
  function moveRightLogic() {
    if (index < pages.length - 1) {
      setIndex(index + 1)
      aboutRef.current.scrollBy({ left: window.innerWidth })
    }
    else {
      setIndex(0)
      aboutRef.current.scrollTo({ left: 0 })
    }
  }
  const moveRight = (e) => {
    e.preventDefault()
    isSliding = false
    moveRightLogic()
  }
  const moveLeft = (e) => {
    e.preventDefault()
    isSliding = false
    if (index > 0) {
      setIndex(index - 1)
      aboutRef.current.scrollBy({ left: -window.innerWidth })
    }
    else {
      setIndex(pages.length - 1)
      aboutRef.current.scrollTo({ left: window.innerWidth * pages.length })
    }
  }
  return (
    <a href="#contact" className="toDownLInk">
      <div className={aboutStyles.aboutContainer} id="about" ref={aboutRef}>
        <div className="arrows">
          <div className="arrow" onClick={(e) => { moveLeft(e) }}></div>
          <div className="arrow arrow2" onClick={(e) => { moveRight(e) }}></div>
        </div>
        {pages.map((page, i) => {
          return (
            <div className={aboutStyles.about} key={i}>
              <div className={aboutStyles.aboutText}>
                <h1 className="title">{page.title}</h1>
                <p>
                  {page.text}
                </p>
                <br />
                <p>
                  {page.text2}
                </p>
              </div>
              <div className={aboutStyles.aboutImageContainer}>
                <img className={aboutStyles.companyAbout} src={page.image} height="100%" width="100%" />
              </div>
            </div>
          )
        })}
      </div>
    </a>
  )
}
export default About