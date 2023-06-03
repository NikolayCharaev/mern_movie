import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFavoriteList } from '../../redux/favorites/favoriteFilm';
import { setGlobalLoading } from '../../redux/features/globalLoading';
import { fetchAuthMe } from '../../redux/user/auth';
import Title from '../common/Title';

import { HiOutlineEmojiSad } from 'react-icons/hi';
import { AiFillDelete } from 'react-icons/ai';

import { Link } from 'react-router-dom';
import Button from '../common/Button';

import { fetchRemoveFilm } from '../../redux/favorites/favoriteFilm';

const Favorites = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAuthMe());
    dispatch(fetchFavoriteList());
  }, []);

  const { films } = useSelector((state) => state.favoriteFilms);
  return (
    <div>
      <Title text="Мои фильмы" />
      {films.length <= 0 && (
        <div className="flex items-center gap-2 text-3xl text-center justify-center font-jost">
          <h1 className="">Тут пока ничего нет </h1>
          <HiOutlineEmojiSad className="" />
        </div>
      )}
      <div className="2xl:grid 2xl:grid-cols-5 flex flex-wrap justify-center  gap-4 pb-20 items-center ">
        {films.map((elem, index) => {
          const { kinopoiskId, posterUrl, nameRu, _id } = elem;
          return (
            <>
              <Link to={`/${kinopoiskId}`}>
                <div
                  key={_id}
                  className="p-3 rounded bg-headerBg relative"
                  onClick={() => {
                    dispatch(setGlobalLoading(true));
                  }}>
                  <div className="">
                    <img src={posterUrl} className="w-72 h-96 object-cover " alt="" />
                  </div>
                  <div className="text-center p-2">
                    <p>{nameRu}</p>
                  </div>
                  <Button
                    text={<AiFillDelete />}
                    styles={'absolute top-[10px] right-[10px]'}
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(fetchRemoveFilm(elem._id));
                    }}
                  />
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
