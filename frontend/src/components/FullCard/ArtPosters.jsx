import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import Title from '../common/Title';

import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

const ArtPosters = () => {
  const {posters} = useSelector((state) => state.movieInfo.movieData);
  
  return (
    <div className="">
      <Title text="Изображения из ленты" />
      <Swiper
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
        >
        {posters.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="rounded flex items-center justify-center">
                <img className="h-[900px] object-cover" src={item} alt="poster" />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ArtPosters;

