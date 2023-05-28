import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchTopFilms,
  fetchTopAwaitFilms,
  fetchPopularFilms,
} from '../../redux/features/moviesTop';
import Title from '../common/Title';
import { Swiper, SwiperSlide } from 'swiper/react';
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
          spaceBetween={10}
          slidesPerView={slidesPerView}
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
            .swiper-scrollbar {
              background-color: #ffffff83;
              height:5px;
            }
            .swiper-scrollbar-drag { 
              background-color: white;
              padding : 3px
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default TopFilms;
