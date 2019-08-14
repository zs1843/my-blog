import { HOME } from '../types';

const initialState = {
    a: 0
};

function homeReducer(state = initialState, action){
    switch(action.type){
        case HOME: {
            return {
                ...state,
                a: 1
            }
        }
        default:{
            return state;
        }
    }
}

export default homeReducer;