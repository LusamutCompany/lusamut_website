import emailjs from '@emailjs/browser';
import { useRef, useEffect, useState } from 'react';
import contactStyles from "./Contact.module.css"
import instagramImage from "./../../assets/svgs/Instagram.svg";
import facebookImage from "./../../assets/svgs/Facebook.svg";

const serviceID = 'default_service';
const templateID = 'template_ypcs4ke';
function Contact() {
    const [sending, setSending] = useState(false)
    const nameRef = useRef(null)
    const emailRef = useRef(null)
    const telephoneRef = useRef(null)
    const messageRef = useRef(null)
    useEffect(() => emailjs.init("ZscmY3hjIBNzRMcni"), []);
    const sendMail = (event) => {
        event.preventDefault()
        if (!sending &&
            nameRef.current.value.trim() !== "" &&
            emailRef.current.value.trim() !== "" &&
            telephoneRef.current.value.trim() !== "" &&
            messageRef.current.value.trim() !== "") {
            setSending(true)
            emailjs.send(serviceID, templateID, {
                from_name: nameRef.current.value,
                email: emailRef.current.value,
                telephone: telephoneRef.current.value,
                message: messageRef.current.value
            })
                .then(() => {
                    alert('Sent!');
                    setSending(false)
                }, (err) => {
                    alert(JSON.stringify(err));
                    setSending(false)
                });
        }
    }
    return (
        <section className={contactStyles.contact} id="contact">
            <div>
                <div className={contactStyles.socialMedia}>
                    <div>
                        <a href="https://www.instagram.com/lusamut_am/" target="_blank"><img src={instagramImage} width="54px" height="54px" /></a>
                        <a href="https://www.facebook.com/profile.php?id=61552980194103" target="_blank"><img src={facebookImage} width="54px" height="54px" /></a>
                    </div>
                    <div>
                        <div>
                            <p>Հասցե</p>
                            <b><p>Ծիծեռնակաբերդի խճ․ 1/3</p></b>
                        </div>

                        <div>
                            <p>Հեռախոսահամար</p>
                            <b><p>+374 33 74 74 74</p></b>
                        </div>

                        <div className={contactStyles.footer}>
                            <p>
                                <span>2023</span>
                                <span> Բոլոր իրավունքները պաշտպանված են</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className={contactStyles.map}>
                    <a href="https://yandex.ru/maps/org/lusamut_am/172824248383/?utm_medium=mapframe&utm_source=maps" style={{ color: "#eee", fontSize: "12px", position: "absolute", top: "0px" }}>Lusamut. am</a><a href="https://yandex.ru/maps/10262/yerevan/category/doors/184107677/?utm_medium=mapframe&utm_source=maps" style={{ color: "#eee", fontSize: "12px", position: "absolute", top: "14px" }}>Դռներ  </a>
                    <a href="https://yandex.ru/maps/10262/yerevan/category/windows/184107727/?utm_medium=mapframe&utm_source=maps" style={{ color: "#eee", fontSize: "12px", position: "absolute", top: "28px" }}>Լուսամուտներ / Լուսամուտների խանութ  </a>
                    <iframe src="https://yandex.ru/map-widget/v1/?indoorLevel=1&ll=44.489747%2C40.179289&mode=search&oid=172824248383&ol=biz&z=17.05" width="100%" height="100%" allowfullscreen="true" style={{ position: "relative" }}></iframe>
                </div>
            </div>
            <div className={contactStyles.contactForm}>
                <div>
                    <h1>ԿԱՊ ՄԵԶ ՀԵՏ</h1>
                    <form>
                        <input type="text" placeholder="Անուն Ազգանուն" ref={nameRef}/>
                        <input type="email" placeholder="Էլ․ հասցե" ref={emailRef} />
                        <input type="tel" placeholder="Հեռախոսահամար" ref={telephoneRef} />
                        <textarea type="text" placeholder="Նամակ" ref={messageRef}></textarea>
                        <button type="submit" onClick={sendMail}>{!sending ? "Ուղարկել" : "Ուղարկվում է"}</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact