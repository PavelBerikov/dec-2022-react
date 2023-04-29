import React from 'react';

const Album = ({album}) => {
    const {usrId, id, title} = album;
    return (
        <div>
            <h3>User ID</h3> - {album.userID}
            TITLE - <p>{album.title}</p>
        </div>
    );
};

export default Album;