import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '../common/Button';
import Genres from '../common/Genres';
import Title from '../common/Title';
import ArtPosters from './ArtPosters';
import FilmActors from './FilmActors';
import FilmVideo from './FilmVideo';
import { AiFillHeart } from 'react-icons/ai';
import { fetchAddFilm, fetchFavoriteList } from '../../redux/favorites/favoriteFilm';

const CardContent = () => {
  const [newFavorite, setNewFavorite] = useState(false);
  const dispatch = useDispatch();
  const { film } = useSelector((state) => state.movieInfo.movieData);
  const { user } = useSelector((state) => state.userSlice);
  const { favorite } = useSelector((state) => state.favoriteFilms);
  const {
    nameRu,
    ratingKinopoisk,
    year,
    description,
    countries,
    genres,
    posterUrl,
    shortDescription,
    kinopoiskId,
  } = film;

  const favoriteFilmAdding = {
    nameRu: nameRu,
    year: year,
    posterUrl: posterUrl,
    kinopoiskId: kinopoiskId,
  };

  useEffect(() => {
    dispatch(fetchFavoriteList());
  }, []);

  return (
    <div className="px-10 ">
      <div className="flex xs:flex-col xs:items-center gap-4 font-jost">
        <div className=" inline">
          <img src={posterUrl} alt="" className="min-w-full w-96 rounded xs:w-[300px]" />
        </div>
        <div className="w-1/2 xs:w-full">
          <div className="flex items-center gap-5">
            <Title text={nameRu} />
            <h1 className="text-3xl sm:text-2xl xs:text-xl">({year})</h1>
          </div>
          <div className="flex flex-wrap gap-3 items-end mb-8 ">
            <p className={ratingKinopoisk ? 'ml-4 border p-2 rounded' : 'hinnde'}>
              {ratingKinopoisk}
            </p>
            {genres &&
              genres.map((item, index) => {
                const { genre } = item;
                return <Genres genre={genre} key={index} />;
              })}
          </div>

          <div className="mb-5">
            <p className="font-jost text-xl mb-5 font-extralight text-stone-200 sm:text-sm ">
              {shortDescription}
            </p>
            <div className="text-xl sm:overflow-scroll sm:max-h-[200px] sm:bg-headerBg sm:p-4 rounded sm:text-sm ">
              <p className=" mb-3 ">{description}</p>
            </div>
          </div>
          <div className="flex gap-10 items-center">
            <p>
              Cтрана:{' '}
              {countries &&
                countries.map((elem, index) => {
                  const { country } = elem;
                  return (
                    <span key={index}>
                      {country} {index !== countries.length - 1 && ', '}{' '}
                    </span>
                  );
                })}
            </p>

            {favorite || newFavorite ? (
              <p className="bg-blue-600 text-2xl p-2 rounded">
                <AiFillHeart className="text-green-500" />
              </p>
            ) : (
              <Button
                styles={user.length <= 0 && 'hidden'}
                text={<AiFillHeart />}
                onClick={() => {
                  dispatch(fetchAddFilm(favoriteFilmAdding));
                  setNewFavorite(true);
                }}
              />
            )}
          </div>
          <div className="mb-10 sm:hidden">
            <FilmActors />
          </div>
        </div>
      </div>

      <div className="mb-10 hidden sm:block">
            <FilmActors />
          </div>
      <div className="">
        <ArtPosters />
        <FilmVideo />
      </div>
    </div>
  );
};

export default CardContent;
