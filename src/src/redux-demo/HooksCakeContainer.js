import { useSelector, useDispatch } from 'react-redux';
import { buyCake } from './redux/cake/CakeActions.js'
function HooksCakeContainer() {
    const numberOfCake = useSelector((state)=>state.cakeReducer.numberOfCake);
    const dispatch = useDispatch();
    return (
        <>
            <h1>Number of Cake - {numberOfCake}</h1>
            <button type="button" onClick={()=>dispatch(buyCake())}>Buy Cake</button>
        </>
    );
}



export default HooksCakeContainer;