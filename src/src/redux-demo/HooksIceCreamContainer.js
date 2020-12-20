import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { buyIceCream } from './redux/IceCream/IceCreamAction';
function HooksIceCreamContainer() {
    const numberOfIceCream = useSelector((state)=>state.iceCreamReducer.numberOfIceCream);
    const dispatch = useDispatch();
    return (
        <>
            <h1>Number of Ice-cream: {numberOfIceCream}</h1>
            <button type="button" onClick={()=>dispatch(buyIceCream())}>Buy Ice-cream</button>
        </>
    );
}

export default HooksIceCreamContainer;