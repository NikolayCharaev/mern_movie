import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchMovieData,
  fetchMoviePosters,
  fetchMovieActors,
  fetchMovieVideos,
} from '../../redux/features/movieInfo';
import { useEffect } from 'react';
import CardContent from './CardContent';

const FullCard = () => {
  const { id } = useParams();
  const { posters } = useSelector((state) => state.movieInfo.movieData);
  const dispatch = useDispatch();

  function getRandomElement(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }

  useEffect(() => {
    dispatch(fetchMovieData(id));
    dispatch(fetchMoviePosters(id));
    dispatch(fetchMovieActors(id));
    dispatch(fetchMovieVideos(id));
  }, []);

  const randomPoster = getRandomElement(posters);
  const {coverUrl} = useSelector(state => state.movieInfo.movieData.film)

  return (
    <>
      <div
        className="w-full h-[70vh] bg-left-top bg-no-repeat bg-cover rounded-b-lg shadow-cardShadow  "
        style={{ backgroundImage: `url(${coverUrl || randomPoster})` }}></div>
      <div className=" w-full mt-[-200px]  pb-12">
        <CardContent />
      </div>
    </>
  );
};

export default FullCard;
