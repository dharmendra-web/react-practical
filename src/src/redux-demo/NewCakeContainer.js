
import {connect} from 'react-redux';
import {buyCake} from './redux';
import {useState} from 'react';
const NewCakeContainer = (props)=> {
    const [number, setNumber] = useState(1);
    console.log({'props': props});
    return (
        <>
            <h1>Number Of Cake - {props.numberOfCake}</h1>
            <input type="text" value={number} onChange={(e)=>setNumber(e.target.value)}/>
            <button type="button" onClick={()=>props.buyCake(number)}>Buy {number} Cake</button>
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
        buyCake: (number)=>dispatch(buyCake(number))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer)