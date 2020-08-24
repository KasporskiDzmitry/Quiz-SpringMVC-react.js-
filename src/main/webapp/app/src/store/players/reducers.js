import { SET_NAME } from "./actions";
import { CHANGE_SCORE } from "./actions";
import { SWITCH_PLAYER } from "./actions";

const initialState = [
    {
        id: 0,
        name: '',
        score: 0,
        isActive: true
    },
    {
        id: 1,
        name: '',
        score: 0,
        isActive: false
    }
];

export const playersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NAME:
            return [
                ...state.slice(0, action.payload.id),
                {
                    ...state[action.payload.id],
                    name: action.payload.name
                },
                ...state.slice(action.payload.id + 1)
            ];
        case CHANGE_SCORE:
            return [
                ...state.slice(0, action.payload.id),
                {
                    ...state[action.payload.id],
                    score: state[action.payload.id].score + action.payload.score
                },
                ...state.slice(action.payload.id + 1)
            ];
        case SWITCH_PLAYER:
            if (state[0].isActive) {
                return [
                    {
                        ...state[0],
                        isActive: false
                    },
                    {
                        ...state[1],
                        isActive: true
                    }
                ];
            } else {
                return [
                    {
                        ...state[0],
                        isActive: true
                    },
                    {
                        ...state[1],
                        isActive: false
                    }
                ];
            }
        default:
            return state;
    }
};