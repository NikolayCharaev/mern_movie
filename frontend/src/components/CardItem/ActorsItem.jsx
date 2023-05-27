import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setGlobalLoading } from '../../redux/features/globalLoading';
import { FcInfo } from 'react-icons/fc';

const ActorsItem = ({ name, poster, actorId }) => {
  const [hovered, setHovered] = useState(false);
  const dispatch = useDispatch();

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };
  return (
    <div>
      <Link to={`/${actorId}`}>
        <div
          className=" relative "
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={() => dispatch(setGlobalLoading(true))}>
          <img className="w-52 h-52 object-cover" src={poster} alt="poster" />
          <div
            className={`absolute h-full w-full top-0  left-0 ${
              hovered ? 'opacity-100' : 'opacity-0'
            } transition-opacity duration-300 bg-card-gradient `}>
            <div className="flex flex-col justify-center items-center h-full">
              <div className="">
                <FcInfo className="text-red-500 text-7xl cursor-pointer transition hover:text-red-700" />
              </div>
              <div className="mt-4">
                <p>{name}</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ActorsItem;
