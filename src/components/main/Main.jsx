import banner1 from '../../assets/b1.jpg';
import banner2 from '../../assets/b2.jpg';
import banner3 from '../../assets/b3.jpg';
import banner4 from '../../assets/b4.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Main.css'

export const Main = () => {
    return (
            <>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    autoplay={{ delay: 3000 }}
                    navigation
                    pagination={{ clickable: true }}
                    loop={true}
                    className="mySwiper">

                    <SwiperSlide className='swiper'>
                        <img src={banner1} alt="Slide 1"/>
                    </SwiperSlide>

                    <SwiperSlide className='swiper'>
                        <img src={banner2} alt="Slide 2"/>
                    </SwiperSlide>

                    <SwiperSlide className='swiper'>
                        <img src={banner3} alt="Slide 3" />
                    </SwiperSlide>

                    <SwiperSlide className='swiper'>
                        <img src={banner4} alt="Slide 3" />
                    </SwiperSlide>

                </Swiper>
            </>
    )
}
