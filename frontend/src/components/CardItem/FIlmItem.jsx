import { useState } from 'react';
import { BsYoutube } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setGlobalLoading } from '../../redux/features/globalLoading';

const CardItem = ({ posterUrl, filmYear, filmName, id }) => {
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
        className=" relative "
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => dispatch(setGlobalLoading(true))}>
        <img className="w-82 h-96 object-cover" src={posterUrl} alt="poster" />
        <div
          className={`absolute h-full w-full top-0  left-0 ${
            hovered ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-300 bg-card-gradient `}>
          <div className="flex flex-col justify-center items-center h-full">
            <div className="">
              <BsYoutube className="text-red-500 text-7xl cursor-pointer transition hover:text-red-700" />
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
