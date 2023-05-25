import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Title from '../common/Title';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import CardItem from '../CardItem';
const TopFilms = ({ text, filmsList }) => {
  const dispatch = useDispatch();
  return (
    <div className="mt-7">
      <Title text={text} />
      <div className="">
        <Swiper
          spaceBetween={10}
          slidesPerView={6}
          navigation={true}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}>
          {filmsList.map((film) => {
            const { posterUrl, year, nameRu } = film;
            return (
              <>
                <SwiperSlide>
                  <CardItem posterUrl={posterUrl} filmName={nameRu} filmYear={year} />
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
