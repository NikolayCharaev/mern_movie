import { useState, useEffect } from 'react';
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
  const [screenVideo, setScreenVideo] = useState('');
  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth < 580) {
        setScreenVideo('400px');
      } else if (window.innerWidth < 768) {
        setScreenVideo('500px');
      } else if (window.innerWidth < 992) {
        setScreenVideo('600px');
      } else if (window.innerWidth < 1060) {
        setScreenVideo('700px');
      }else{ 
        setScreenVideo('900px')
      }
    };
    window.addEventListener('resize', updateSlidesPerView);
    updateSlidesPerView();

    return () => {
      window.removeEventListener('resize', updateSlidesPerView);
    };
  }, []);
  return (
    <div className="">
      <Title text="Фрагменты видео и трейлеры" />
      {videos.length > 0 ? (
        <Swiper modules={[Navigation]} spaceBetween={10} slidesPerView={1} navigation>
          {videos.map((item, index) => {
            const { url, name } = item;
            return (
              <SwiperSlide key={index} className="w-[1000px]">
                <div className="flex justify-center flex-col items-center">
                  <ReactPlayer url={url} controls={true} width='100%' height={screenVideo} />
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
