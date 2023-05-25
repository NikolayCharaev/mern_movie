import { useEffect } from 'react';
import {
  fetchTopFilms,
  fetchTopAwaitFilms,
  fetchPopularFilms,
} from '../../redux/features/moviesList';
import { useDispatch, useSelector } from 'react-redux';
import TopFilms from '../TopFilms';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTopFilms());
    dispatch(fetchTopAwaitFilms());
    dispatch(fetchPopularFilms());
  }, []);
  const topFilms = useSelector((state) => state.allMovies.topFilms.films);
  const awaitFilms = useSelector((state) => state.allMovies.topAwaitFilms.films);
  const popularFilms = useSelector((state) => state.allMovies.topPopularFilms.films);
  return (
    <div className='pb-20'>
      <TopFilms text="Топ за все время" filmsList={topFilms} />
      <TopFilms text="Самые ожидаемые фильмы" filmsList={awaitFilms} />
      <TopFilms text="Популярные фильмы" filmsList={popularFilms} />
    </div>
  );
};

export default Home;
