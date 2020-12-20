import React from 'react';
import {connect} from 'react-redux';
import {fetchUser} from './redux/user/userAction.js';

function UserContainer(props) {
    console.log({'props': props});
    return (
        <>

            <div>  <h1>Loading Status: {props.loading ? 'Loading': 'Loaded'}</h1></div>
            <div>  <h1>Failure Status: {props.error != '' ? props.error: 'No Error Occurred'}</h1></div>
            <div>  <h1>User Status ids are: {props.user.map((data)=><span key={data}>{data} </span>)}</h1></div>
            <button type="button" onClick={props.fetchUser}>Fetch User</button>
        </>
    );
}

const mapStateToProps = (state)=> {
    console.log({'state': state});
    return {
        user: state.userReducer.users,
        loading: state.userReducer.loading,
        error: state.userReducer.error
    }
}

const mapDispatchToProps = (dispatch)=> {
    return {
        fetchUser: ()=> {dispatch(fetchUser())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);