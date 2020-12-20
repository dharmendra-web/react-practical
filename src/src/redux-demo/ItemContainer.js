import react from 'react';
import {connect} from 'react-redux';
import {buyCake} from './redux/cake/CakeActions.js';
import {buyIceCream} from './redux/IceCream/IceCreamAction.js';

function ItemContainer(props) {
    return (
        <>
            <h1>Item - {props.numberOfItem}</h1>
            <button type="button" onClick={props.buyItem}>Buy Items</button>
        </>
    )
}

const mapStateToProps = (state, ownProps)=> {
    const numberOfItem = (ownProps.cake) ? state.cakeReducer.numberOfCake: state.iceCreamReducer.numberOfIceCream;
    return {
        numberOfItem: numberOfItem
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const buyItem = (ownProps.cake) ? ()=>dispatch(buyCake()): ()=>dispatch(buyIceCream());
    return {
        buyItem: buyItem
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);