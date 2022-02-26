import { useEffect } from 'react';
import { useParams } from "react-router"
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getProductsId } from '../redux/actions/productActions'
import style from './DetailMenu.module.css'
import { IoLogoWhatsapp } from "react-icons/io";
import {  IoArrowBack } from "react-icons/io5";

function DetailMenu(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const filter = useSelector(state => state.productReducer.prodFilt)
    console.log(filter)
    let {id} = useParams();

    useEffect(() => {
        filter.id !== id &&
            dispatch(getProductsId(id));
      
        
    },[])

    return(
        <div>
            <div className={style.conten}>
            <div className={style.contentD}></div>
            <div className={style.contentDos}></div>
                <div className={style.contenMenu}>
                    {/* <div> */}

                        {/* <div className={style.contentT}></div> */}
                        <div className={style.imgMenu}><img src={filter.img} alt="Hamburg" /></div>
                    {/* </div> */}
                    <div className={style.textMenu}>
                        <div className={style.titulo}>
                            <h3><b>{filter.name}</b></h3>
                            <button onClick={()=>{navigate('/')}}><IoArrowBack className={style.iconB}/></button>
                        </div>
                        <div className={style.card}>
                        <p><b>Descripcion: </b>{filter.description}</p>
                        <p className={style.txt}><b>Producto: </b> #{filter.id}</p>
                        <p className={style.txtt}><b>Value: </b>{filter.value} cop</p>
                        </div>
                        <div>
                            <a  className={style.contacto} href="https://wa.me/573188944935?text=Quiero%20Mi%20pedido"><b>Contactanos</b><IoLogoWhatsapp className={style.waap}/></a>
                        </div>
                    </div>
                </div>
                <div className={style.contentDos}></div>
                {/* <div className={style.contentD}></div> */}
            </div>

        </div>
    )
}

export default DetailMenu;