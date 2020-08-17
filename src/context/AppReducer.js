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
        case 'ERROR': 
            return {
                state,
                error : action.payload
            }
        default : 
            return state
    }
}