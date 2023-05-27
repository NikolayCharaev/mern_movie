import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchMovieData,
  fetchMoviePosters,
  fetchMovieActors,
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
  }, []);

  const { coverUrl } = useSelector((state) => state.movieInfo.movieData.film);

  const randomPoster = getRandomElement(posters);

  return (
    <>
      <div
        className="w-full h-[70vh] bg-left-top bg-no-repeat bg-cover rounded-b-lg shadow-cardShadow  "
        style={{ backgroundImage: `url(${randomPoster})` }}></div>
      <div className=" w-full mt-[-200px]  pb-12">
        <CardContent />
      </div>
    </>
  );
};

export default FullCard;
