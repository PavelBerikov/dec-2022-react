import React, {useEffect, useState} from 'react';
import Ship from "../Ship/Ship";
import post from "../Post/Post";

const Sheeps = () => {
    let [ships, setShips] = useState([]);
    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(value => {
                const filter = value.filter(item => item.launch_year !== '2020')
                setShips(filter)

            })
    }, [])
    return (
        <div>
            {
                ships.map(ship => <Ship key={ship.flight_number} ship={ship}/>)
            }

        </div>
    );
};

export default Sheeps;