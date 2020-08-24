export const SET_NAME = 'SET_NAME';
export const CHANGE_SCORE = 'CHANGE_SCORE';
export const SWITCH_PLAYER = 'SWITCH_PLAYER';

export const setName = (id, name) => ({
    type: SET_NAME,
    payload: {id, name}
});

export const changeScore = (id, score) => ({
    type: CHANGE_SCORE,
    payload: {id, score}
});

export const switchPlayer = () => ({
    type: SWITCH_PLAYER,
});
