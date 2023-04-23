import React from 'react';
import post from "../Post/Post";

const Ship = ({ship}) => {
    let {flight_number,  mission_name, launch_year, mission_patch_small} = post;

    return (
        <div>
            <div>{ship.mission_name}</div>
            <div>{ship.launch_year}</div>
            <div>{ship.mission_patch_small}</div>

        </div>
    );
};

export default Ship;