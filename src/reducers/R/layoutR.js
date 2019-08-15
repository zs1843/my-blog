import { USER } from '../types';

const initialState = {
    menu: [1,2,3,4]
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