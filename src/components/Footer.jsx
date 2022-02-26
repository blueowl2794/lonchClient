import { BiRegistered } from "react-icons/bi";
import { IoLogoWhatsapp } from "react-icons/io";
import style from './Footer.module.css'
function Footer(){
    return (
        <div>
            <div className={style.content}></div>
            <div className={style.contentDos}></div>
            <div className={style.footer}>
                <div className={style.contentFooter}> <h4>Loncheria medellin<BiRegistered/></h4></div>
                {/* <div className={style.contentFooter}><p><b>Reuniones, fiestas y eventos</b></p></div> */}
                <div className={style.contentFooter}><a href="https://wa.me/573188944935?text=Quiero%20Mi%20pedido"><b>Contactanos</b><IoLogoWhatsapp/></a></div>
            </div>
        </div>
    )
}

export default Footer;