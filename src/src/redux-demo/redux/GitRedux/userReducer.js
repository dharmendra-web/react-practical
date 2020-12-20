const initialUser = {
    loading: true,
    users: [],
    error: '',
    usersData: [],
    repositoryData: []
}

const GitUserReducer = (state = initialUser, action)=> {
    switch(action.type) {
        case 'Fetch_User_Request': 
            return {
                ...state,
                loading: true,
                users: [],
                error: '',
                usersData: [],
                repositoryData: []
            }
        case 'Fetch_User_Success': 
            return {
                ...state,
                loading: false,
                users: action.payload,
                error: '',
                usersData: [],
                repositoryData: []
            }
        case 'Fetch_User_Failure': 
            return {
                ...state,
                loading: false,
                users: [],
                error: action.payload,
                usersData: [],
                repositoryData: []
            }
        case 'Fetch_Users_Data': 
            return {
                ...state,
                loading: false,
                error: '',
                usersData: action.payload,

            }
        case 'Fetch_Users_Repository_Data': 
            return {
                ...state,
                loading: false,
                error: '',
                repositoryData: action.payload
            }
        default: return state
    }
}

export default GitUserReducer