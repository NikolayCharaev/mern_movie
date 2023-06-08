import { useState, useEffect } from 'react';
import { BsYoutube } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setGlobalLoading } from '../../redux/features/globalLoading';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const CardItem = ({ posterUrl, filmYear, filmName, id }) => {
  const [posterLoad, setPosterLoad] = useState(true);
  const [hovered, setHovered] = useState(false);
  const dispatch = useDispatch();

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <Link to={`/${id}`}>
      <div
        className=" "
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => dispatch(setGlobalLoading(false))}>
        <div className="relative">
          {posterLoad && <Skeleton className="w-82 h-96 object-cover lg:w-44 lg:h-72" />}
          <img
            className="w-82 h-96 object-cover lg:w-full lg:h-full"
            src={posterUrl}
            onLoad={() => {
              setPosterLoad(false);
            }}
            style={{ display: posterLoad ? 'none' : 'block' }}
            alt="poster"
          />
        </div>
        <div
          className={`absolute h-full w-full top-0  left-0 ${
            hovered ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-300 bg-card-gradient `}>
          <div className="flex flex-col justify-center items-center h-full sm:text-sm xs:text-xs">
            <div className="">
              <BsYoutube className="text-red-500 text-7xl cursor-pointer transition hover:text-red-700 sm:text-4xl xs:text-2xl " />
            </div>
            <div className="flex gap-3">
              <h4>{filmName}</h4>
              <p>({filmYear})</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardItem;
