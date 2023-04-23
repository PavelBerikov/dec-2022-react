import React from 'react';

const Simpson = ({simpson}) => {
    const {id, name, surname, age, info, photo} = simpson;
    return (
        <div>
            <div><h1>{name} {surname}</h1></div>
            <div>AGE - {age}</div>
            <img src={photo} alt={name}/>
            <p>{info}</p>
        </div>
    );
};

export default Simpson;