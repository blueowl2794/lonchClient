import { Link } from "react-router-dom";
import style from './CardMenu.module.css'

function CardMenu({props}){
    return(
        <div className={style.CardMenu}>
            <Link to={`/products/${props.id}`}>
                <h3>{props.name}</h3>
                <img src={props.img} alt="img" />
                <p><b>{props.summary}</b></p>
            </Link>
        </div>  
    )
}

export default CardMenu;