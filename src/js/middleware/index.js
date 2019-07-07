import { userConstants  } from '../constants';

const forbiddenWords = ["spam", "money"];

export function forbiddenWordsMiddleware({ dispatch }) {
    return function(next) {
        return function(action) {
            // if(action.type === userConstants.LOGIN_SUCCESS) {
            //     const foundWord = forbiddenWords.filter(word => 
            //         action.payload.includes(word));
            //         if(foundWord.length) {
            //             return dispatch({type : "FOUND_BAD_WORD"})
            //         }
            // }
            return next(action);
        };
    };
}