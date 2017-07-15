import * as C from './constants'; 
import Immutable from 'immutable';

const INITIAL_STATE = {images: []};

var imagesReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case C.FETCH_IMAGES:
            return {...state, images: action.data}; // ES6 way to clone obj
    };

    return state
};

export default imagesReducer;