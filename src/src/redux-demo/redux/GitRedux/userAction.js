import axios from 'axios';
export const fetchUserRequest = ()=> {
    return {
        type: 'Fetch_User_Request',
    }
}

export const fetchUserDetails = (users)=> {
    return {
        type: 'Fetch_Users_Data',
        payload: users
    }
}

export const fetchUserRepositoryDetails = (users)=> {
    return {
        type: 'Fetch_Users_Repository_Data',
        payload: users
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

export const fetchUser = (url_data, data)=> {
    return (dispatch)=> {
        dispatch(fetchUserRequest);
        axios.get(url_data).then(
            (res)=> {
                const user = res.data;
                dispatch((data == 'users')? fetchUserSuccess(user): (data == 'usersDetails')?  fetchUserDetails(user): fetchUserRepositoryDetails(user));
            }
        ).catch((error)=> {
            dispatch(fetchUserFailure(error.message));
        })
    }
}

