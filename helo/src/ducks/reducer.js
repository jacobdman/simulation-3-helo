const initialState = {
    userName: '',
    password: '',
}

const UPDATE_ISAUTH = 'UPDATE_ISAUTH'

export default function reducer( state = initialState, action ){ 
    switch( action.type ){
        
        case UPDATE_ISAUTH:
        return Object.assign( {}, state, { isAuth: !state.isAuth })
        
        default:
        return state;
    }
}

export function updateIsAuth ( isAuth ) {
    return {
        type: UPDATE_ISAUTH,
        payload: isAuth
    }
}
