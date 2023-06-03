import { useState } from 'react';
import Button from '../common/Button';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSearchFilms } from '../../redux/features/searchFilm';
import { Link } from 'react-router-dom';
import Title from '../common/Title';

import { BsYoutube } from 'react-icons/bs';
import { ImSpinner8 } from 'react-icons/im';
import { setGlobalLoading } from '../../redux/features/globalLoading';

const SearchFilms = () => {
  const [value, setValue] = useState('');
  const { items, status } = useSelector((state) => state.searchFilm);
  const dispatch = useDispatch();
  return (
    <div className="mt-20">
      <form action="" className="flex items-center gap-2">
        <input
          type="text"
          className="w-full p-3 rounded bg-headerBg focus:outline-none focus:border-none"
          placeholder="введите название фильма"
          onChange={(e) => {
            setValue(e.target.value);
          }}
          value={value}
        />
        <Button
          type="submit"
          text={status === 'loading' ? <ImSpinner8 className="animate-spin h-7" /> : 'поиск'}
          onClick={(e) => {
            e.preventDefault();
            dispatch(fetchSearchFilms(value));
            setValue('');
          }}
        />
      </form>
      <div className="mt-20">
        {items.length > 0 && (
          <>
            <Title text="Найденные фильмы" />
            <div className="flex flex-wrap items-center lg:justify-center gap-4 pb-20 ">
              {items.map((elem, index) => {
                const { filmId, posterUrl, nameRu } = elem;
                console.log(elem);
                return (
                  <>
                    <Link to={`/${filmId}`}>
                      <div className="p-3 rounded bg-headerBg " onClick={() => { 
                        dispatch(setGlobalLoading(true))
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
          </>
        )}
      </div>
    </div>
  );
};

export default SearchFilms;
