import { React, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import img from '../img/ham.jpg'
import CardMenu from './CarMenu'
import style from './Menu.module.css'
import { getProducts } from '../redux/actions/productActions';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Menu(){
    const dispatch = useDispatch();
    const products = useSelector(state => state.productReducer.products)
    console.log(products)

    useEffect(() => {
        dispatch(getProducts())
        
    },[])
        
    return(
        <div>
            <div className={style.conten}></div>
            <div className={style.contenMenu}>
                <div className={style.imgMenu}><img src={img} alt="Hamburg" /></div>
                <div className={style.textMenu}>
                    <h3>Nuestros productos</h3>
                    <div >
                        <Swiper
                            spaceBetween={20}
                            slidesPerView={2}
                            navigation
                            pagination={{ clickable: true }}
                            scrollbar={{ draggable: true }}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            >

                                {
                                    products? products.map((a) => (
                                        <SwiperSlide key={a.id}>
                                            <CardMenu key={a.id} props ={a}/> 

                                        </SwiperSlide>
                                    )):null
                                }


                            
                            {/* <SwiperSlide>Slide 2</SwiperSlide>
                            <SwiperSlide>Slide 3</SwiperSlide>
                            <SwiperSlide>Slide 4</SwiperSlide> */}
                            
                        </Swiper>
                    </div>
                </div>
            </div>


        </div>
    )
}
export default Menu;