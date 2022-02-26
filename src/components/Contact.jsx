import { useState } from "react";
import style from './Contact.module.css'
import img from '../img/Loncheria.png'
import { useNavigate } from 'react-router-dom'
import { IoLogoWhatsapp } from "react-icons/io5";
import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";
// import {mailerPedido} from '../redux/actions/mailerActions.js'
import Swal from 'sweetalert2'

export function validate(input) {
  
    let errors = {};
    
    if(!input.name ){
        errors.name = "Se solicita campo"
    }
    if (!input.tel ) {
      errors.tel = 'Por favor ingresa un numero';
    } 
    
    return errors;
};

function Contact(){
    const navigate = useNavigate();
    const [type, setType] = useState({
        name: '',
        tel:'',
        detalle:"",
    });
    const [errors, setErrors] = useState({});

    function onInputChange(e){
        e.preventDefault()
        setType( {
            ...type,
            [e.target.name]: e.target.value
        }) 
        setErrors(validate({
            ...type,
            [e.target.name]: e.target.value
          }));
    }

    function onSubmit(e){
        e.preventDefault()
        const x = async()=>{
        await fetch(`http://localhost:3000/mailer`, {
            method: 'POST',
            body: JSON.stringify({
                name: type.name,
                tel: type.tel,
                detalle: type.detalle,
            }),
            headers: {
                'content-type': 'application/json',
            },
        })
        .then(()=>{
            Swal.fire({
                icon: 'success',
                title: 'Muy bien',
                text: 'Te estaremos llamando lo mas pronto posible',
              })
            })
            // navigate("/")
            window.location.href = window.location.href;
            // window.location.replace('');
    
        }
        if (!type.tel) {
            Swal.fire({
                icon: 'error',
                title: 'Algo salio mal',
                text: 'Debes tener algunos campos listos para el contacto',
            })
        }else{
            (errors.name || errors.tel)  ?
            Swal.fire({
                icon: 'error',
                title: 'Algo salio mal',
                text: 'Debes tener algunos campos listos para el contacto',
            }):
            x()
        }
        
        // axios.get('http://localhost:3000/mailer', type)
        // .then(() => {
        //     alert("added tourist activity" );
        // })
    }



    return(
        <div className={style.contact}>
            <div className={style.form}>
                <h3>Formulario de contacto</h3>
                <p>Responderemos en menos de <b>24h</b></p>
                <form onSubmit = {onSubmit}>
                    <label htmlFor="">Nombre</label>
                    <input className={errors.name && 'danger'}
                        onChange={onInputChange} 
                        value={type.name}
                        name="name"
                        type="text" 
                    />
                    {errors.name && (
                            <p className="danger">{errors.name}</p>
                        )}{!errors.name && <p> </p>}

                    <label htmlFor="">Telefono o Celular</label>
                    <input className={errors.tel && 'danger'} 
                        onChange={onInputChange} 
                        value={type.tel}
                        name="tel"
                        type="tel" 
                    />
                    {errors.tel && (
                            <p className="danger">{errors.tel}</p>
                        )}{!errors.tel && <p> </p>}

                    <label htmlFor="">Detalle<b>(optional)</b></label>
                    <input className={errors.detalle && 'danger'} 
                        onChange={onInputChange} 
                        value={type.detalle}
                        name="detalle"
                        type="text" 
                    />
                    {errors.detalle && (
                            <p className="danger">{errors.detalle}</p>
                        )}{!errors.detalle && <p> </p>}

                    <input className={style.btn} type="submit"  value="Enviar"/>
                </form>
            </div>
            <div className={style.logo}><img src={img} alt="img" /></div>
            <div className={style.contactSocial}>
                <h3><b>Contacto directo</b></h3>
                <p>Contactanos directamente si se solicita de inmediato</p>
                <div> <a href="https://wa.me/573188944935?text=Quiero%20Mi%20pedido"><IoLogoWhatsapp className={style.iconw} /><b>Whatsapp</b></a></div>
                <div><IoLogoFacebook className={style.iconf} /><b>Facebook</b></div>
                <div><IoLogoInstagram className={style.iconi}/><b>Instagram</b></div>
            </div>
            
        </div>
    )
}

export default Contact;