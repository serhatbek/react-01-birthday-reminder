import React from 'react';

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { id, image, name, age } = person;
        return (
          <div className='person' key={id}>
            <figure>
              <img src={image} alt={name} />
            </figure>
            <div>
              <span>{name}</span>
              <span>{age}</span>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default List;
