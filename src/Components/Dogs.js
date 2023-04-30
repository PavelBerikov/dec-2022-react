import React from 'react';
import {useForm} from "react-hook-form";

const Dogs = ({stateDispatch}) => {
    const {reset, register, handleSubmit} = useForm();
    const [{dogs}, dispatch] = stateDispatch;
    const saveDog = (dog) => {
        dispatch({type:'ADD_DOG', payload: dog})
    }
    return (
        <div>
            <form onSubmit={handleSubmit(saveDog)}>
                <input type={'text'} placeholder={'dog'} {...register('name')}/>
                <button>save</button>
            </form>
            {dogs.map(dog => <div key={dog.id}>{dog.name}<button onClick={() =>dispatch({type: 'DEL_DOG', payload: dog.id})}>DELETE</button></div>)}

        </div>
    );
};

export default Dogs;