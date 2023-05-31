import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFavoriteList } from '../../redux/favorites/favoriteFilm';
import { setGlobalLoading } from '../../redux/features/globalLoading';
import { fetchAuthMe } from '../../redux/user/auth';
import Title from '../common/Title';

import { HiOutlineEmojiSad } from 'react-icons/hi';

import { Link } from 'react-router-dom';
const Favorites = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAuthMe());
    dispatch(fetchFavoriteList());
  }, []);

  const { films } = useSelector((state) => state.favoriteFilms);
  console.log(films);
  return (
    <div>
      <Title text="Мои фильмы" />
      {films.length <= 0 && (
        <div className="flex items-center gap-2 text-3xl text-center justify-center font-jost">
          <h1 className="">Тут пока ничего нет </h1>
          <HiOutlineEmojiSad className="" />
        </div>
      )}
      <div className="grid grid-cols-5 gap-4 pb-20 ">
        {films.map((elem, index) => {
          const { kinopoiskId, posterUrl, nameRu } = elem;
          console.log(elem);
          return (
            <>
              <Link to={`/${kinopoiskId}`}>
                <div
                  className="p-3 rounded bg-headerBg"
                  onClick={() => {
                    dispatch(setGlobalLoading(true));
                  }}>
                  <div className="">
                    <img src={posterUrl} className="w-72 h-96 object-cover " alt="" />
                  </div>
                  <div className="text-center p-2">
                    <p>{nameRu}</p>
                  </div>
                </div>
              </Link>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Favorites;
