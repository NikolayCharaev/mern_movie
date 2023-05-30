import { useEffect } from 'react';
import {
  fetchTopFilms,
  fetchTopAwaitFilms,
  fetchPopularFilms,
} from '../../redux/features/moviesTop';
import { useDispatch, useSelector } from 'react-redux';
import TopFilms from '../TopFilms';
import { fetchAuthMe } from '../../redux/user/auth';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTopFilms(1));
    dispatch(fetchTopAwaitFilms(1));
    dispatch(fetchPopularFilms(1));


    dispatch(fetchAuthMe())
  }, []);
  const topFilms = useSelector((state) => state.allMovies.topFilms.films);
  const awaitFilms = useSelector((state) => state.allMovies.topAwaitFilms.films);
  const popularFilms = useSelector((state) => state.allMovies.topPopularFilms.films);
  return (
    <div className="pb-20">
      <TopFilms text="Топ за все время" filmsList={topFilms} />
      <TopFilms text="Самые ожидаемые фильмы" filmsList={awaitFilms} />
      <TopFilms text="Популярные фильмы" filmsList={popularFilms} />
    </div>
  );
};

export default Home;
