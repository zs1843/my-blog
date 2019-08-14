import { USER } from '../types';

const initialState = {
    
};

function LayoutReducer(state = initialState, action){
    switch(action.type){
        case USER: {
            return {
                ...state,
                
            }
        }
        default:{
            return state;
        }
    }
}

export default LayoutReducer;