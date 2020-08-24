import React from 'react';

export const Player = props => {
    const player = props.data;
    return (
        <div className={player.isActive ? 'player active' : 'player'} id={`player_${player.id}`}>
            <h2>{player.name} - </h2>
            <p>{player.score}</p>
        </div>
    );
};
