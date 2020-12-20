import {BUY_CAKE} from './ActionType.js';

const initialState = {
    numberOfCake: 10
}

const cakeReducer = (prevState = initialState, action)=> {
    switch(action.type) {
        case BUY_CAKE: return {
            ...prevState,
            numberOfCake: prevState.numberOfCake - action.payload
        }
        default: return prevState;

    }
}
export default cakeReducer;