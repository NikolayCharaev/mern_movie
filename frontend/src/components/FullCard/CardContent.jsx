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
  const [newFavorite, setNewFavorite] = useState(false)
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
    <div className="px-20 ">
      <div className="flex gap-4 font-jost">
        <div className="w-1/3 ">
          <img src={posterUrl} alt="" className="min-w-full rounded" />
        </div>
        <div className="w-1/2">
          <div className="flex items-center gap-5">
            <Title text={nameRu} />
            <h1 className="text-3xl">({year})</h1>
          </div>
          <div className="flex items-end mb-8 ">
            <p className={ratingKinopoisk ? 'ml-4 border p-2 rounded' : 'hinnde'}>
              {ratingKinopoisk}
            </p>
            {genres &&
              genres.map((item, index) => {
                const { genre } = item;
                return <Genres genre={genre} key={index} />;
              })}
          </div>

          <p className="font-jost text-xl mb-5 font-extralight text-stone-200">
            {shortDescription}
          </p>

          <p className=" text-xl mb-3">{description}</p>

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
                  setNewFavorite(true)
                }}
              />
            )}
          </div>

          <div className="mb-10">
            <FilmActors />
          </div>
        </div>
      </div>
      <div className="">
        <ArtPosters />
        <FilmVideo />
      </div>
    </div>
  );
};

export default CardContent;
