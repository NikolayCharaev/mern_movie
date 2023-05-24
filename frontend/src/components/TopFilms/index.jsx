import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Title from '../common/Title';
const TopFilms = () => {
  const dispatch = useDispatch();
  const { films } = useSelector((state) => state.allMovies.topFilms);
  console.log(films);
  return <div>
    <Title text='asasda'/>
  </div>;
};

export default TopFilms;
