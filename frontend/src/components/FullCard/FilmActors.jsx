import Title from '../common/Title';
import ActorsItem from '../CardItem/ActorsInfo/ActorsItem';
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper';
import 'swiper/css';
import 'swiper/css/scrollbar';

const FilmActors = () => {
  const { actors } = useSelector((state) => state.movieInfo.movieData);

  return (
    <>
      <Title text="Актеры" />
      <div className="pb-4 ">
        <Swiper
          modules={[Scrollbar]}
          spaceBetween={10}
          slidesPerView={4}
          scrollbar={{ draggable: true }}
          >
          {actors.map((elem, index) => {
            const { nameRu, posterUrl, staffId } = elem;
            return (
              <div className="" key={index}>
                <SwiperSlide key={index} className="mb-6">
                  <ActorsItem name={nameRu} poster={posterUrl} actorId={staffId} />
                </SwiperSlide>
              </div>
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
    </>
  );
};

export default FilmActors;
