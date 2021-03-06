import {
	FETCH_QUESTION_REQUEST,
	FETCH_QUESTION_SUCCESS,
	FETCH_QUESTION_ERROR,
	FETCH_ANSWER_SUCCESS,
	FETCH_ANSWER_ERROR,
	UPDATE_QUESTIONS_REQUEST,
	UPDATE_QUESTIONS_SUCCESS,
	UPDATE_QUESTIONS_ERROR,
} from '../actions/action-types';

const initialState = {
	prompt: '',
	hasAnswered: false,
	correct: false,
	loading: false,
	error: null,
};

export default function reducer(state=initialState, action) {
	if (action.type === FETCH_QUESTION_REQUEST) {
		return Object.assign({}, state, {
			loading: action.loading,
		});
	} else if (action.type === FETCH_QUESTION_SUCCESS) {
		return Object.assign({}, state, {
			prompt: action.prompt,
			loading: action.loading,
			error: null
		});
	} else if (action.type === FETCH_QUESTION_ERROR) {
		return Object.assign({}, state, {
			error: action.error,
			loading: action.loading
		});
	} else if (action.type === FETCH_ANSWER_SUCCESS) {
		console.log('FETCHED ANSWER',action);
		return Object.assign({}, state, {
			correct: action.correct,
			loading: action.loading,
			hasAnswered: action.hasAnswered,
			error: null
		});
	} else if (action.type === FETCH_ANSWER_ERROR) {
		return Object.assign({}, state, {
			error: action.error,
			loading: action.loading
		});
	} else if (action.type === UPDATE_QUESTIONS_REQUEST) {
		return Object.assign({}, state, {
			loading: action.loading,
			hasAnswered: action.hasAnswered
		});
	} else if (action.type === UPDATE_QUESTIONS_SUCCESS) {
		return Object.assign({}, state, {
			loading: action.loading,
			error: null
		});
	} else if (action.type === UPDATE_QUESTIONS_ERROR) {
		return Object.assign({}, state, {
			error: action.error,
			loading: action.loading
		});
	}
	return state;
}
