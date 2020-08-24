export const ADD_ANSWERED_QUESTION = 'CHANGE_ANSWERED_QUESTIONS_ARRAY';
export const LOAD_TOPICS = 'LOAD_TOPICS';

export const addAnsweredQuestion = question => ({
    type: ADD_ANSWERED_QUESTION,
    payload: question
});

export const loadTopics = topics => ({
    type: LOAD_TOPICS,
    payload: topics
});
