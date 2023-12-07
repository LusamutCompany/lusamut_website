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
                        <a href="https://www.instagram.com/lusamut_am/" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54" fill="none">
                                <path d="M26.8563 17.3926C20.9961 17.3926 16.1406 22.1644 16.1406 28.1082C16.1406 34.052 20.9124 38.8238 26.8563 38.8238C32.8001 38.8238 37.5719 33.9683 37.5719 28.1082C37.5719 22.2481 32.7164 17.3926 26.8563 17.3926ZM26.8563 34.9729C23.089 34.9729 19.9916 31.8754 19.9916 28.1082C19.9916 24.341 23.089 21.2435 26.8563 21.2435C30.6235 21.2435 33.721 24.341 33.721 28.1082C33.721 31.8754 30.6235 34.9729 26.8563 34.9729Z" fill="#787B83" />
                                <path d="M37.9903 19.5684C39.3311 19.5684 40.418 18.4815 40.418 17.1407C40.418 15.7998 39.3311 14.7129 37.9903 14.7129C36.6494 14.7129 35.5625 15.7998 35.5625 17.1407C35.5625 18.4815 36.6494 19.5684 37.9903 19.5684Z" fill="#787B83" />
                                <path d="M44.2701 10.862C42.0935 8.60171 38.996 7.42969 35.48 7.42969H18.2345C10.9512 7.42969 6.0957 12.2852 6.0957 19.5685V36.7302C6.0957 40.33 7.26773 43.4275 9.61177 45.6878C11.8721 47.8645 14.8859 48.9528 18.3182 48.9528H35.3963C38.996 48.9528 42.0098 47.7807 44.1864 45.6878C46.4467 43.5112 47.6188 40.4137 47.6188 36.814V19.5685C47.6188 16.0524 46.4467 13.0387 44.2701 10.862ZM43.9353 36.814C43.9353 39.4092 43.0144 41.502 41.5075 42.9252C40.0006 44.3484 37.9077 45.1018 35.3963 45.1018H18.3182C15.8067 45.1018 13.7138 44.3484 12.207 42.9252C10.7001 41.4183 9.94663 39.3254 9.94663 36.7302V19.5685C9.94663 17.057 10.7001 14.9641 12.207 13.4572C13.6301 12.0341 15.8067 11.2806 18.3182 11.2806H35.5637C38.0752 11.2806 40.1681 12.0341 41.6749 13.5409C43.0981 15.0478 43.9353 17.1407 43.9353 19.5685V36.814Z" fill="#787B83" />
                            </svg>
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=61552980194103" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54" fill="none">
                                <path d="M37.4274 29.6796L38.6712 21.4175H30.8904V16.0559C30.8904 13.7955 31.9773 11.5922 35.4624 11.5922H39V4.55829C39 4.55829 35.7894 4 32.7201 4C26.3117 4 22.1233 7.9569 22.1233 15.1204V21.4175H15V29.6796H22.1233V49.6528C23.5517 49.881 25.0156 50 26.5069 50C27.9982 50 29.4621 49.881 30.8904 49.6528V29.6796H37.4274Z" fill="#787B83" />
                            </svg>
                        </a>
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
                    <iframe src="https://yandex.ru/map-widget/v1/?indoorLevel=1&ll=44.489747%2C40.179289&mode=search&oid=172824248383&ol=biz&z=17.05" width="100%" height="100%" allowFullScreen={true} style={{ position: "relative" }}></iframe>
                </div>
            </div>
            <div className={contactStyles.contactForm} id="contactForm">
                <div>
                    <h1 className="title">ԿԱՊ ՄԵԶ ՀԵՏ</h1>
                    <form>
                        <input type="text" placeholder="Անուն Ազգանուն" ref={nameRef} />
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