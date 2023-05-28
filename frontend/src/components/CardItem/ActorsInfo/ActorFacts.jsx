import React from 'react';
import Title from '../../common/Title';

const ActorFacts = ({ facts }) => {
  console.log(facts);
  return (
    <div className="mt-20">
      <Title text={'Интересные факты'} />

      <div className="font-jost text-xl">
        {facts.map((elem, id) => {
          return (
            <p className="mb-2">
              {id + 1 + ' '}) {' '} {elem}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default ActorFacts;
