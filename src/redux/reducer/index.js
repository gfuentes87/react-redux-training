import {ADD_ARTICLE, DATA_LOADED, FOUND_BAD_WORDS} from "../actions/actionTypes";

const initialState = {
    articles: [],
    message: null
};

const rootReducer = (state = initialState, action) => {
    if (action.type === ADD_ARTICLE) {
        return {
            articles: state.articles.concat(action.payload),
        };
    }
    if (action.type === FOUND_BAD_WORDS) {
        return {
            articles: state.articles,
            message: 'BAD WORD INSERTED',
            new_article: action.payload
        }
    }
    if (action.type === DATA_LOADED) {
        return {
            articles: state.articles.concat(action.payload)
        }
    }
    return state;
};

export default rootReducer;
