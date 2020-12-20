import React from 'react';
import {connect} from 'react-redux';
import { buyIceCream } from './redux/IceCream/IceCreamAction';
function IceCreamContainer(props) {
    return (
        <>
            <h1>Number of Ice-Cream: {props.numberOfIceCream}</h1>
            <button type="button" onClick={props.buyIceCream}>Buy Ice-cream</button>
        </>
    );
}

const mapStateToProps = (state)=> {
    return {
        numberOfIceCream: state.iceCreamReducer.numberOfIceCream
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyIceCream: ()=>dispatch(buyIceCream())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);