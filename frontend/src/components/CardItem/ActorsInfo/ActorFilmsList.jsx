import { useState } from 'react';
import Title from '../../common/Title';
import { BsFilm } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Button from '../../common/Button';

const ActorFilmsList = ({ films }) => {
  const [hovered, setHovered] = useState(false);
  const [visibleFilms, setVisibleFilms] = useState(20); // Состояние для отслеживания количества показанных фильмов
  const dispatch = useDispatch();

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const handleShowMore = () => {
    setVisibleFilms((prevVisibleFilms) => prevVisibleFilms + 20); // Увеличиваем количество показанных фильмов на 20
  };

  return (
    <div className="pb-20">
      <Title text={'Фильмы с участием актера'} />

      <div className="flex flex-wrap gap-5">
        {films.slice(0, visibleFilms).map((elem, id) => {
          const { description, filmId, nameRu, rating, professionKey } = elem;

          return (
            <div key={id}>
              <Link to={`/${filmId}`}>
                <div className="w-44 h-44 flex items-center justify-center bg-headerBg rounded">
                  <div className="flex flex-col gap-4 justify-center items-center">
                    <BsFilm className="text-7xl" />
                    <p className="text-center">{nameRu.slice(0, 20)}...</p>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="mt-10">
        <Button text="еще" styles={'px-20'} onClick={() => { 
            handleShowMore()
            console.log(visibleFilms)
        }} /> {/* Добавляем обработчик клика */}
      </div>
    </div>
  );
};

export default ActorFilmsList;
