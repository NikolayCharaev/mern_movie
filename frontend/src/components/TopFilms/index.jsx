import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Title from '../common/Title';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
const TopFilms = ({ text, filmsList }) => {
  const dispatch = useDispatch();
  return (
    <div className="mt-7">
      <Title text={text} />
      <div className="">
        <Swiper
          spaceBetween={20}
          slidesPerView={4}
          navigation={true}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}>
          {filmsList.map((film) => {
            const { posterUrl } = film;
            return (
              <>
                <SwiperSlide>
                  <img src={posterUrl} alt="" />
                </SwiperSlide>
              </>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default TopFilms;
