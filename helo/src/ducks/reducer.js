const initialState = {
    username: '',
    id: null,
    profile_pic: '',
}

const UPDATE_USER = 'UPDATE_USER'

export default function reducer( state = initialState, action ){ 
    switch( action.type ){
        
        case UPDATE_USER:
        return { ...state, ...action.payload }

        default:
        return state;
    }
}

export function updateUser ( user ) {
    return {
        type: UPDATE_USER,
        payload: user
    }
}

