import { combineReducers } from "redux";
import { questionsReducer } from "./questions/reducers";
import { playersReducer } from "./players/reducers";

import {RESET_STORE} from "./actions";

const appReducer = combineReducers({
    questions: questionsReducer,
    players: playersReducer
});

const rootReducer = (state, action) => {
    if (action.type === RESET_STORE) {
        state = undefined;
    }
    return appReducer(state, action);
};

export default rootReducer;