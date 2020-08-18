export default (state , action) => {
    switch(action.type) {
        case 'GET_MEETINGS':
            return {
                ...state,
                loading :false,
                meetings : action.payload,
                curr : action.curr
            }
        case 'REMOVE_ERROR':
                return {
                    state,
                    error : false
                }
        case 'OK':
            return {
                state,
                curr : action.curr,
                message : action.payload,
                error : false
            }
        case 'BUSY':
            return {
                state,
                message : action.payload,
                curr : action.curr,
                error : false
            }
        case 'CLEAR':
            return {
                state,
                message : null
            }
        case 'ERROR': 
            return {
                state,
                error : action.payload
            }
        default : 
            return state
    }
}