import {connect} from 'react-redux';
import {buyCake} from './redux';
const CakeContainer = (props)=> {
    return (
        <>
            <h1>Number Of Cake - {props.numberOfCake}</h1>
            <button type="button" onClick={props.buyCake}>Buy Cake</button>
        </>
    )
}

const mapStateToProps = (state)=> {
    return {
        numberOfCake: state.cakeReducer.numberOfCake
    }
}

const mapDispatchToProps = (dispatch)=> {
    return {
        buyCake: ()=>dispatch(buyCake())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)