import Title from '../../common/Title';

const ActorFacts = ({ facts }) => {
  console.log(facts);
  return (
    <div className="mt-20">
      <Title text={'Интересные факты'} />

      <div className="font-jost text-xl">
        {facts.map((elem, id) => {
          return (
            <p className="mb-2 xs:text-base">
              {id + 1 + ' '}) {elem}
            </p>
          );
        })}
        {facts.length <= 0 && <p>Нет интересных фактов об этом актере</p>}
      </div>
    </div>
  );
};

export default ActorFacts;
