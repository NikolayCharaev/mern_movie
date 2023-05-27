import { useSelector } from 'react-redux';
import Genres from '../common/Genres';
import Title from '../common/Title';
import ArtPosters from './ArtPosters';
import FilmActors from './FilmActors';
import FilmVideo from './FilmVideo';

const CardContent = () => {
  const { film } = useSelector((state) => state.movieInfo.movieData);
  const {
    nameRu,
    ratingKinopoisk,
    slogan,
    year,
    description,
    countries,
    genres,
    posterUrl,
    shortDescription,
    id,
  } = film;
  return (
    <div className="px-20 ">
      <div className="flex gap-4 font-jost">
        <div className="w-1/3 ">
          <img src={posterUrl} alt="" className="min-w-full rounded" />
        </div>
        <div className="w-1/2">
          <div className="flex items-center gap-5">
            <Title text={nameRu} />
            <h1 className="text-3xl">({year})</h1>
          </div>
          <div className="flex items-end mb-8 ">
          <p className="ml-4 border p-2 rounded">{ratingKinopoisk}</p>

            {genres &&
              genres.map((item) => {
                const { genre } = item;
                return <Genres genre={genre} key={id} />;
              })}
          </div>

          <p className="font-jost text-xl mb-5 font-extralight text-stone-200">
            {shortDescription}
          </p>

          <p className=" text-xl mb-3">{description}</p>

          <p>
            Cтрана:{' '}
            {countries &&
              countries.map((elem, index) => {
                const { country } = elem;
                return (
                  <span key={index}>
                    {country} {index !== countries.length - 1 && ', '}{' '}
                  </span>
                );
              })}
          </p>
          <div className="mb-10">
            <FilmActors />
          </div>
        </div>
      </div>
      <div className="">
        <ArtPosters />
        <FilmVideo/>
      </div>
    </div>
  );
};

export default CardContent;