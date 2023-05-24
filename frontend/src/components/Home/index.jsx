import { useEffect } from 'react';
import { fetchTopFilms, fetchTopAwaitFilms } from '../../redux/features/moviesList';
import { useDispatch, useSelector } from 'react-redux';
import TopFilms from '../TopFilms';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTopFilms());
    dispatch(fetchTopAwaitFilms())

  }, []);
  const topFilms = useSelector((state) => state.allMovies.topFilms.films);
  const awaitFilms = useSelector((state) => state.allMovies.topAwaitFilms.films);
  return (
    <div>
      <TopFilms text="Топ за все время" filmsList={topFilms} />
      <TopFilms text="Самые ожидаемые фильмы" filmsList={awaitFilms} />
    </div>
  );
};

export default Home;
