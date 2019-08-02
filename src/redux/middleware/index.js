import {ADD_ARTICLE, FOUND_BAD_WORDS} from "../actions/actionTypes";
import {badWord} from "../actions/actions";

const forbiddenWords = ['spam', 'money'];

const forbiddenWordsMiddleware = ({dispatch}) => {
    return (next) => {
        return (action) => {
            if (action.type === ADD_ARTICLE) {
                const foundWord = forbiddenWords.filter(word => action.payload.title.includes(word));

                if (foundWord.length) {
                    return dispatch(badWord(action.payload));
                }
            }
            return next(action);
        }
    }
};

export default forbiddenWordsMiddleware;
