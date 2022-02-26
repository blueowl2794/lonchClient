import img from '../img/entrega.svg'
import imgOne from '../img/24Horas.svg'
import imgTwo from '../img/calendar.svg'

import style from  './Steps.module.css'
function Steps(){
    return(
        <div className={style.contSteps}>
           <div className={style.steps}>
                <h3>Contacta</h3>
                <img src={imgOne} alt="imgOne" />
                <h3>Repuesta en menos de 24</h3>
                <p className={style.stepsPb}><b>Prioriza</b> tu orden</p>
                <p>Redes disponibles o formulario de contacto</p>
            </div> 
            <div className={style.steps}>
                <h3>Ordena</h3>
                <img src={imgTwo} alt="imgTne" />
                <h3>Organiza tu pedido</h3>
                <p className={style.stepsPb}><b>Genera</b> tu orden</p>
                <p>Cantidades tipo de producto, tiempo de entrega y mucho mas</p>
            </div> 
            <div className={style.steps}>
                <h3>Entrega</h3>
                <img src={img} alt="imgOne" />
                <h3>Entrega rapida, al momento</h3>
                <p className={style.stepsPb}><b>Entregamos</b> tu orden</p>
                <p>Nuestro equipo de entrega tendra su producto fresco y al momento</p>
            </div> 
        </div>
        
    )
}
export default Steps;