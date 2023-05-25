import { useState } from 'react';
import { BsYoutube } from 'react-icons/bs';

const CardItem = ({ posterUrl, filmYear, filmName }) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div className=" relative " onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <img className="w-full h-[400px]" src={posterUrl} alt="poster" />
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
  );
};

export default CardItem;
