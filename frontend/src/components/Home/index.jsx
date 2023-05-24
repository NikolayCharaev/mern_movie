import { useEffect } from 'react';
import { fetchTopFilms } from '../../redux/features/moviesList';
import { useDispatch } from 'react-redux';
import TopFilms from '../TopFilms';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTopFilms());
  }, []);
  return (
    <div>
      <TopFilms />
    </div>
  );
};

export default Home;
