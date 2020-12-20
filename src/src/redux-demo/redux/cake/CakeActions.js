import {BUY_CAKE} from './ActionType.js'
export const buyCake = (number = 1)=> {
    return {
        type: BUY_CAKE,
        payload: number
    }
}