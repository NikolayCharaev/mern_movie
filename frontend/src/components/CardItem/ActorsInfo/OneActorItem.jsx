import { useEffect } from 'react';
import Loading from '../../common/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchActorInfo } from '../../../redux/features/oneActor';
import Title from '../../common/Title';

import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import ActorFacts from './ActorFacts';
import ActorFilmsList from './ActorFilmsList';

const OneActorItem = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchActorInfo(id));
  }, []);

  const { item } = useSelector((state) => state.actorInfo.actor);
  const {
    birthplace,
    birthday,
    age,
    growth,
    nameRu,
    posterUrl,
    profession,
    spouses,
    facts,
    films,
  } = item;

  const formattedDate = dayjs(birthday).locale('ru').format('D MMMM, YYYY');

  const formatHeight = (height) => {
    const meters = Math.floor(height / 100); // Получаем количество метров
    const centimeters = height % 100; // Получаем количество сантиметров

    return `${meters}м ${centimeters}см`;
  };

  return (
    <div>
      <div className="flex gap-10 mt-20">
        <div className="">
          <img src={posterUrl} alt="" className="rounded" />
        </div>
        <div className=" ">
          <Title text={nameRu} />
          <h1 className="text-2xl mb-3">O персоне</h1>
          <div className="text-gray-300 flex flex-col gap-4">
            <p>
              Карьера : <span className="text-white">{profession}</span>
            </p>
            <p>
              Рост: <span className="text-white">{formatHeight(growth)}</span>
            </p>
            <p>
              Дата рождения:{' '}
              <span className="text-white">
                {formattedDate} ({age} лет)
              </span>
            </p>
            <p>
              Место рождения: <span className="text-white">{birthplace}</span>
            </p>
            <p>
              Семья:{' '}
              {spouses &&
                spouses.map((elem, index) => {
                  const { name, relation } = elem;
                  return (
                    <span className="text-white" key={index}>
                      {name} - {relation} {spouses.length > 1 ? ', ' : ''}
                    </span>
                  );
                })}
            </p>
          </div>
        </div>
      </div>
      {facts && <ActorFacts facts={facts}/>}
      {films && <ActorFilmsList films={films}/>}
    </div>
  );
};

export default OneActorItem;
