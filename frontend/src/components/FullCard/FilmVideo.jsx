import React from 'react';
import Title from '../common/Title';
import ReactPlayer from 'react-player/youtube';
import { useSelector } from 'react-redux';

import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

const FilmVideo = () => {
  const { videos } = useSelector((state) => state.movieInfo.movieData);

  return (
    <div className="">
      <Title text="Фрагменты видео и трейлеры" />
      {videos.length > 0 ? (
        <Swiper
          modules={[Navigation]}
          spaceBetween={10}
          slidesPerView={1}
          navigation
          // onSlideChange={() => console.log('slide change')}
          // onSwiper={(swiper) => console.log(swiper)}
          >
          {videos.map((item, index) => {
            const { url, name } = item;
            return (
              <SwiperSlide key={index} className="w-[1000px]">
                <div className="flex justify-center flex-col items-center">
                  <ReactPlayer url={url} controls={true} width="100%" height="800px" />
                  <p>{name}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      ) : (
        <h1>У этого фильма нет видеоматериалов</h1>
      )}
    </div>
  );
};

export default FilmVideo;
