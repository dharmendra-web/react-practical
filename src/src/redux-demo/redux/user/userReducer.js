const initialUser = {
    loading: true,
    users: [],
    error: ''
}

const userReducer = (state = initialUser, action)=> {
    switch(action.type) {
        case 'Fetch_User_Request': 
            return {
                ...state,
                loading: true,
                users: [],
                error: ''
            }
        case 'Fetch_User_Success': 
            return {
                ...state,
                loading: false,
                users: action.payload,
                error: ''
            }
        case 'Fetch_User_Failure': 
            return {
                ...state,
                loading: false,
                users: [],
                error: action.payload
            }
        default: return state
    }
}

export default userReducer