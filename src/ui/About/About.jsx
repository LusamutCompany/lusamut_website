import aboutStyles from "./About.module.css"
import aboutImage from "./../../assets/pngs/Image.png"

function About(){
 return (
    <section className={aboutStyles.about} id="about">
      <div className={aboutStyles.aboutText}>
       
        <h1>Մեր Մասին</h1>
        <p>
         Հայտնի է, որ ընթերցողը, կարդալով հասկանալի տեքստ, չի կարողանա կենտրոնանալ տեքստի ձևավորման վրա: Lorem Ipsum օգտագործելը բացատրվում է նրանով, որ այն բաշխում է բառերը քիչ
         թե շատ իրականի նման, ի տարբերություն «Բովանդակություն, բովանդակություն» սովորական կրկննության, ինչը ընթերցողի համար հասկանալի է: 
        </p>
        <br />
        <p>
         Շատ համակարգչային տպագրական ծրագրեր և ինտերնետային էջերի խմբագրիչներ այն օգտագործում են որպես իրենց ստանդարտ տեքստային մոդել, և հետևապես,
         ինտերնետում Lorem Ipsum-ի որոնման արդյունքում կարելի է հայտնաբերել էջեր, որոնք դեռ նոր են կերտվում:
        </p>
      </div>
      <div className={aboutStyles.aboutImageContainer}>
         <img className={aboutStyles.companyAbout} src={aboutImage}  height="630px" width="100%"/>
      </div>
    </section>
 )
}
export default About