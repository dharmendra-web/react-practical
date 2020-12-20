import axios from 'axios';
export const fetchUserRequest = ()=> {
    return {
        type: 'Fetch_User_Request',
    }
}

export const fetchUserSuccess = (users)=> {
    return {
        type: 'Fetch_User_Success',
        payload: users
    }
}

export const fetchUserFailure = (error)=> {
    return {
        type: 'Fetch_User_Failure',
        payload: error
    }
}

export const fetchUser = ()=> {
    return (dispatch)=> {
        dispatch(fetchUserRequest);
        axios.get('https://jsonplaceholder.typicode.com/users').then(
            (res)=> {
                const user = res.data.map((data)=>data.id);
                dispatch(fetchUserSuccess(user));
            }
        ).catch((error)=> {
            dispatch(fetchUserFailure(error.message));
        })
    }
}