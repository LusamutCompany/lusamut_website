import { useState, useRef, useEffect } from "react"
import aboutStyles from "./About.module.css"
import aboutImage from "./../../assets/pngs/Image.png"

const pages = [
  {
    title: "ՄԵՐ ՄԱՍԻՆ",
    text: " Հայտնի է, որ ընթերցողը, կարդալով հասկանալի տեքստ, չի կարողանա կենտրոնանալ տեքստի ձևավորման վրա: Lorem Ipsum օգտագործելը բացատրվում է նրանով, որ այն բաշխում է բառերը քիչթե շատ իրականի նման, ի տարբերություն «Բովանդակություն, բովանդակություն» սովորական կրկննության, ինչը ընթերցողի համար հասկանալի է:",
    text2: " Շատ համակարգչային տպագրական ծրագրեր և ինտերնետային էջերի խմբագրիչներ այն օգտագործում են որպես իրենց ստանդարտ տեքստային մոդել, և հետևապես, ինտերնետում Lorem Ipsum-ի որոնման արդյունքում կարելի է հայտնաբերել էջեր, որոնք դեռ նոր են կերտվում:",
    image: aboutImage
  },
  {
    title: "ՄԵՐ ՄԱՍԻՆ2",
    text: " Հայտնի է, որ ընթերցողը, կարդալով հասկանալի տեքստ, չի կարողանա կենտրոնանալ տեքստի ձևավորման վրա: Lorem Ipsum օգտագործելը բացատրվում է նրանով, որ այն բաշխում է բառերը քիչթե շատ իրականի նման, ի տարբերություն «Բովանդակություն, բովանդակություն» սովորական կրկննության, ինչը ընթերցողի համար հասկանալի է:",
    text2: " Շատ համակարգչային տպագրական ծրագրեր և ինտերնետային էջերի խմբագրիչներ այն օգտագործում են որպես իրենց ստանդարտ տեքստային մոդել, և հետևապես, ինտերնետում Lorem Ipsum-ի որոնման արդյունքում կարելի է հայտնաբերել էջեր, որոնք դեռ նոր են կերտվում:",
    image: aboutImage
  },
  {
    title: "ՄԵՐ ՄԱՍԻՆ3",
    text: " Հայտնի է, որ ընթերցողը, կարդալով հասկանալի տեքստ, չի կարողանա կենտրոնանալ տեքստի ձևավորման վրա: Lorem Ipsum օգտագործելը բացատրվում է նրանով, որ այն բաշխում է բառերը քիչթե շատ իրականի նման, ի տարբերություն «Բովանդակություն, բովանդակություն» սովորական կրկննության, ինչը ընթերցողի համար հասկանալի է:",
    text2: " Շատ համակարգչային տպագրական ծրագրեր և ինտերնետային էջերի խմբագրիչներ այն օգտագործում են որպես իրենց ստանդարտ տեքստային մոդել, և հետևապես, ինտերնետում Lorem Ipsum-ի որոնման արդյունքում կարելի է հայտնաբերել էջեր, որոնք դեռ նոր են կերտվում:",
    image: aboutImage
  },
  {
    title: "ՄԵՐ ՄԱՍԻՆ4",
    text: " Հայտնի է, որ ընթերցողը, կարդալով հասկանալի տեքստ, չի կարողանա կենտրոնանալ տեքստի ձևավորման վրա: Lorem Ipsum օգտագործելը բացատրվում է նրանով, որ այն բաշխում է բառերը քիչթե շատ իրականի նման, ի տարբերություն «Բովանդակություն, բովանդակություն» սովորական կրկննության, ինչը ընթերցողի համար հասկանալի է:",
    text2: " Շատ համակարգչային տպագրական ծրագրեր և ինտերնետային էջերի խմբագրիչներ այն օգտագործում են որպես իրենց ստանդարտ տեքստային մոդել, և հետևապես, ինտերնետում Lorem Ipsum-ի որոնման արդյունքում կարելի է հայտնաբերել էջեր, որոնք դեռ նոր են կերտվում:",
    image: aboutImage
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