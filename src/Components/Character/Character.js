import React from 'react';

const Character = ({character}) => {
    const {id, name, status, species, type, gender, image} = character;
    return (
        <div>
            <h1>{name}</h1>
            <div>Status - {status}</div>
            <div>{species} / {gender}</div>
            <img src={image} alt={name}/>
        </div>
    );
};

export default Character;