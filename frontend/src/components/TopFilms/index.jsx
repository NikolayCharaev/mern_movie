import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchTopFilms,
  fetchTopAwaitFilms,
  fetchPopularFilms,
} from '../../redux/features/moviesTop';
import Title from '../common/Title';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import CardItem from '../CardItem/FIlmItem';

const TopFilms = ({ text, filmsList }) => {
  const [topFilms, setTopFilms] = useState(1);
  const [awaitFilms, setAwaitFilms] = useState(1);
  const [popularFilms, setPopularFilms] = useState(1);
  const dispatch = useDispatch();
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
        <Swiper
          modules={[Navigation]}
          spaceBetween={10}
          slidesPerView={slidesPerView}
          navigation
          onReachEnd={() => {
            if (text === 'Топ за все время') {
              setTopFilms(topFilms + 1);
              dispatch(fetchTopFilms(topFilms));
            } else if (text === 'Самые ожидаемые фильмы') {
              setAwaitFilms(awaitFilms + 1);
              // dispatch(fetchTopAwaitFilms(awaitFilms));
            } else if (text === 'Популярные фильмы') {
              setPopularFilms(popularFilms + 1);
              dispatch(fetchPopularFilms(popularFilms));
            }
          }}>
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
        <style>
          {`
            .swiper-button-prev {
              background-color: rgba(166, 160, 160, 0.5);
              width: 40px;
              height: 110%;
              z-index: 100;
              left: 0;
              top: 0;
            }
            .swiper-button-next { 
              background-color: rgba(166, 160, 160, 0.5);
              width: 40px;
              height: 110%;
              right: 0;
              top: 0;
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default TopFilms;
