import { BUY_IceCream} from './ActionType';

const initialIceCreamState = {
    numberOfIceCream: 20
}

const iceCreamReducer = (prevState = initialIceCreamState, action)=> {
    switch(action.type) {
        case BUY_IceCream: 
            return {
                ...prevState,
                numberOfIceCream: prevState.numberOfIceCream - 2
            }
        default: return prevState;
    }
}

export default iceCreamReducer;