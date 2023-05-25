import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovieData } from '../../redux/features/movieInfo';
import { useEffect } from 'react';

const FullCard = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const filmInfo = useSelector((state) => state.movieInfo.movieData.film);

  useEffect(() => {
    dispatch(fetchMovieData(id));
  }, []);

  console.log(filmInfo)
  return <div className="">
    
  </div>;
};

export default FullCard;
