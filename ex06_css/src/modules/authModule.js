// -- module ---
//authModule.js
const initalState = {
    login : {username : '', password : ''},
    loading : false,
    error : null,
}
const reducer = (state , action) => {
    switch (action.type) {
        case "INITALSTATE" : return initalState;
        case 'CHANGE_INPUT':
            return {...state,
                [action.form]:{...state[action.form],
                                    [action.name]:action.value} };
        case 'LOADING':
            return { ...state, loading : true, error : null };
        case 'FINISHED':
            return { ...state, loading : false, error : null };
        case 'ERROR':
            return { ...state, loading : false, error : action.error };
        default:
            return state;
    }
}
export {reducer, initalState};