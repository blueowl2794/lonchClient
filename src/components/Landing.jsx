import imgLanding from '../img/pizz.jpg'
import logo from '../img/Loncheria.png'
import style from './Landing.module.css';

function Landing(){
    return(
        <div>
            <div className={style.contenedor} >
                <div className={style.landingImg}>
                    <img src={imgLanding} alt=""/>
                    <div className={style.onDiv}/>
                </div>
                <div className={style.landingText} >
                    <img src={logo} alt="" />
                    <h2>Loncheria Medellin</h2>
                    <p><b>Lo mejor en lunch y snack</b></p>
                    <p>Eventos, reuniones, fiestas y demas...</p>
                </div>
            </div>
            <div className={style.bajo}></div>
        </div>
    )
}

export default Landing;