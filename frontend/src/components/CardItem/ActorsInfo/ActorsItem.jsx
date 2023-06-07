import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setGlobalLoading } from '../../../redux/features/globalLoading';
import { FcInfo } from 'react-icons/fc';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const ActorsItem = ({ name, poster, actorId }) => {
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
    <div onClick={() => dispatch(setGlobalLoading(true))}>
      <Link to={`/actor/${actorId}`}>
        <div className=" relative " onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          {posterLoad && (
            <Skeleton className="w-52 h-52 object-cover sm:w-40 sm:h-40 mt:w-32 mt:h-32" />
          )}
          <img
            className={`w-52 h-52 object-cover sm:w-40 sm:h-40 mt:w-32 mt:h-32 ${
              posterLoad ? 'hidden' : 'block'
            }`}
            src={poster}
            alt="poster"
            onLoad={() => setPosterLoad(false)}
          />
          <div
            className={`absolute h-full w-full top-0  left-0 ${
              hovered ? 'opacity-100' : 'opacity-0'
            } transition-opacity duration-300 bg-card-gradient `}>
            <div className="flex flex-col justify-center items-center h-full sm:text-sm">
              <div className="">
                <FcInfo className=" text-7xl sm:text-2xl cursor-pointer transition " />
              </div>
              <div className="mt-4">
                <p className="text-center">{name}</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ActorsItem;
