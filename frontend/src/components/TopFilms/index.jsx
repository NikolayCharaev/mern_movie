import { useState, useEffect } from 'react';
import Title from '../common/Title';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import CardItem from '../CardItem/FIlmItem';

const TopFilms = ({ text, filmsList }) => {
  const [slidesPerView, setSlidesPerView] = useState(6);

  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth < 768) {
        setSlidesPerView(2);
      } else if (window.innerWidth < 1090) {
        setSlidesPerView(3);
      } else if (window.innerWidth < 1280) {
        setSlidesPerView(4);
      } else {
        setSlidesPerView(6);
      }
    };
    window.addEventListener('resize', updateSlidesPerView);
    updateSlidesPerView();

    return () => {
      window.removeEventListener('resize', updateSlidesPerView);
    };
  }, []);
  return (
    <div className="mt-7">
      <Title text={text} />
      <div className="">
        <Swiper spaceBetween={10} slidesPerView={slidesPerView} navigation={true}>
          {filmsList.map((film) => {
            const { posterUrl, year, nameRu, filmId } = film;
            return (
              <>
                <SwiperSlide key={filmId}>
                  <div>
                    <CardItem posterUrl={posterUrl} filmName={nameRu} filmYear={year} id={filmId} />
                  </div>
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
