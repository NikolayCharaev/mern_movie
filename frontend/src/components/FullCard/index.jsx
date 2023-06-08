import { useState } from 'react';
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
import { checkFavoriteFilm } from '../../redux/favorites/favoriteFilm';

import { fetchAuthMe } from '../../redux/user/auth';

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
    dispatch(fetchAuthMe());
    dispatch(checkFavoriteFilm(id));
  }, []);

  const randomPoster = getRandomElement(posters);
  const { coverUrl } = useSelector((state) => state.movieInfo.movieData.film);

  return (
    <>
      <div
        className="w-full h-[70vh] bg-left-top bg-no-repeat bg-cover rounded-b-lg shadow-cardShadow  lg:h-[60vh] sm:h-[50vh]"
        style={{
          backgroundImage: `url(${coverUrl || randomPoster})`,
        }}></div>
      <div className=" w-full mt-[-200px]  pb-12 lg:mt-[-300px] xs:mt-[-100px]">
        <CardContent />
      </div>
    </>
  );
};

export default FullCard;
