import {
    ADD_ANSWERED_QUESTION,
    LOAD_TOPICS
} from "./actions";


const initialState = {
    answeredQuestionsArray: [],
    topics: [],
};

export const questionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ANSWERED_QUESTION:
            return {
                ...state,
                answeredQuestionsArray: [...state.answeredQuestionsArray, action.payload]
            };
        case LOAD_TOPICS:
            return {
                ...state,
                topics: action.payload
            };
        default:
            break;
    }

    return state;
};