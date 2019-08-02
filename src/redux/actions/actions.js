import {ADD_ARTICLE, DATA_LOADED, FOUND_BAD_WORDS} from "./actionTypes";
import axios from 'axios';

export const addArticle = (payload) => {
    return {
        type: ADD_ARTICLE,
        payload
    }
};

export const badWord = (payload) => {
    return {
        type: FOUND_BAD_WORDS,
        payload
    }
};

export const getData = () => {
    return (dispatch) => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                dispatch({type: DATA_LOADED, payload: response.data})
            });
    }
};


